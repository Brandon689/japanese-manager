package logic

import (
	"encoding/json"
	"fmt"
	"github.com/labstack/echo/v5"
	"github.com/nssteinbrenner/anitogo"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"pocketbase-react-starter/types"
	"strconv"
	"strings"
)

func newFsNode(key int, name string, path string, isDir bool) types.TreeNode {
	x := types.TreeNode{
		Name:  name,
		IsDir: isDir,
		Path:  path,
		Label: name,
		Icon:  "pi pi-fw pi-calendar",
		Key:   strconv.Itoa(key),
	}
	return x
}

func removeLeadingZero(s string) string {
	return strings.TrimLeft(s, "0")
}

func Titles(titles []string) []*anitogo.Elements {
	var t []*anitogo.Elements
	for _, title := range titles {
		el := Title(title)
		el.EpisodeNumber[0] = removeLeadingZero(el.EpisodeNumber[0])
		t = append(t, el)
	}
	return t
}

func Title(title string) *anitogo.Elements {
	parsed := anitogo.Parse(title, anitogo.DefaultOptions)
	jsonParsed, err := json.MarshalIndent(parsed, "", "    ")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(jsonParsed) + "\n")

	// Accessing the elements directly
	fmt.Println("Anime Title:", parsed.AnimeTitle)
	fmt.Println("Anime Year:", parsed.AnimeYear)
	fmt.Println("Episode Number:", parsed.EpisodeNumber)
	fmt.Println("Release Group:", parsed.ReleaseGroup)
	fmt.Println("File Checksum:", parsed.FileChecksum)
	return parsed
}

func UploadFile(c echo.Context, animeName string) error {
	// Get the files from the request
	form, err := c.MultipartForm()
	if err != nil {
		return err
	}
	defer form.RemoveAll()

	// Retrieve slice of files
	files := form.File["demo[]"]

	var b []types.SubtitleUpload
	// Iterate through the files
	for _, file := range files {

		parsedFile := Title(file.Filename)
		fmt.Println(parsedFile.EpisodeNumber)
		b = append(b, types.SubtitleUpload{
			FileName: file.Filename,
			Name:     parsedFile.AnimeTitle,
			Episode:  parsedFile.EpisodeNumber[0],
		})
		// Open the uploaded file
		src, err := file.Open()
		if err != nil {
			return err
		}
		defer src.Close()

		dirPath := "uploads/" + animeName
		err = os.Mkdir(dirPath, 0777)
		if err != nil {
			fmt.Println("Error creating directory:", err)
		}

		dstPath := filepath.Join(dirPath, file.Filename)
		dst, err := os.Create(dstPath)
		if err != nil {
			return err
		}
		defer dst.Close()

		// Copy the file to the destination path
		if _, err = io.Copy(dst, src); err != nil {
			return err
		}
	}

	return c.JSON(http.StatusOK, b)
}

func ListFilesAll(directory string) [1]types.TreeNode {
	id := 0
	var result = newFsNode(id, filepath.Base(directory), directory, true)
	id++
	filepath.Walk(directory, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Skip adding the root directory itself
		if path == directory {
			return nil
		}

		// Extract the relative path
		relPath, err := filepath.Rel(directory, path)
		if err != nil {
			return err
		}

		// Split the path into individual components
		parts := strings.Split(relPath, string(filepath.Separator))

		// Traverse the result to add directories
		currentDir := &result
		for _, part := range parts[:len(parts)-1] {
			found := false
			// Check if the current part already exists in the children
			for i := range currentDir.Children {
				if currentDir.Children[i].Name == part {
					currentDir = &currentDir.Children[i]
					found = true
					break
				}
			}
			// If not found, create a new directory and append it
			if !found {
				//newDir := types.File{Name: part, IsDir: true}
				newDir := newFsNode(id, part, path, true)
				currentDir.Children = append(currentDir.Children, newDir)
				currentDir = &currentDir.Children[len(currentDir.Children)-1]
				id++
			}
		}

		currentDir.Children = append(currentDir.Children, newFsNode(id, parts[len(parts)-1], path, info.IsDir()))
		id++
		//currentDir.Children = append(currentDir.Children, types.File{Name: parts[len(parts)-1], IsDir: info.IsDir(), Path: path})
		return nil
	})

	var arr [1]types.TreeNode
	arr[0] = result
	return arr
}
