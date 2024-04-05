declare interface TreeNode {
    name: string;
    isDir: boolean;
    path: string;
    isImage: boolean;
    key: string;
    label: string;
    data: string;
    icon: string;
    children: TreeNode[];
}

declare interface Subtitles {
    name: string;
}

declare interface AnitogoSubs {
    anime_title: string
    episode_number: string[]
    file_extension: string
    file_name: string
    episode: int
}