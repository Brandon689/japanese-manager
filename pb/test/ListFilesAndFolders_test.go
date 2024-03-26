package main

import (
	"encoding/json"
	"fmt"
	"pocketbase-react-starter/logic"
	"testing"
)

func TestListFilesAll(t *testing.T) {

	result := logic.ListFilesAll("C:\\2024\\10\\pocketbase-react-ts-starter\\pb")

	jsonData, err := json.MarshalIndent(result, "", "    ")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	// Print JSON data
	fmt.Println(string(jsonData))

	//// Define the expected result
	//expected := types.File{
	//	Name:  filepath.Base(tmpDir),
	//	IsDir: true,
	//	Children: []types.File{
	//		{
	//			Name:     "dir1",
	//			IsDir:    true,
	//			Children: []types.File{{Name: "file2.txt", IsDir: false, Path: filepath.Join(tmpDir, "dir1", "file2.txt")}},
	//		},
	//		{
	//			Name:  "dir2",
	//			IsDir: true,
	//			Children: []types.File{
	//				{Name: "file4.txt", IsDir: false, Path: filepath.Join(tmpDir, "dir2", "file4.txt")},
	//			},
	//		},
	//		{Name: "file1.txt", IsDir: false, Path: filepath.Join(tmpDir, "file1.txt")},
	//	},
	//}
	//
	//// Compare the actual result with the expected result
	//if !reflect.DeepEqual(result, expected) {
	//	t.Errorf("Result mismatch.\nExpected:\n%+v\nGot:\n%+v", expected, result)
	//}
}
