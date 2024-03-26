package logic

import (
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
