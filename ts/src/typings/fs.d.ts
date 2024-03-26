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