package types

type TreeNode struct {
	Name    string `json:"name"`
	IsDir   bool   `json:"isDir"`
	Path    string `json:"path"`
	IsImage bool   `json:"isImage"`

	Key   string `json:"key"`
	Label string `json:"label"`
	Data  string `json:"data"`
	Icon  string `json:"icon"`

	Children []TreeNode `json:"children"`
}

type DirPath struct {
	Dir string `json:"dir"`
}
