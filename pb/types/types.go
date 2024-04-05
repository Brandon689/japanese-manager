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

type SubtitleUpload struct {
	FileName string `json:"fileName"`
	Episode  string `json:"episode"`
	Name     string `json:"name"`
}

type Subtitles struct {
	Name string `json:"name"`
}

//type AnitogoSubs []struct {
//	AnimeTitle    string   `json:"anime_title"`
//	EpisodeNumber []string `json:"episode_number"`
//	FileExtension string   `json:"file_extension"`
//	FileName      string   `json:"file_name"`
//}
