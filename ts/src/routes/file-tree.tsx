import { useState, useEffect } from 'react';
import { authenticate } from 'api/pocketbase/auth.ts';
import { getFSTree } from 'api/pocketbase/collections.ts';
import { Tree } from 'primereact/tree';

export default function DashboardPage() {

    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    useEffect(() => {
        console.log("iok")
        const fetchData = async () => {
            try {
                console.log("iosk")

                await authenticate();
                console.log("sok")
                var s = await getFSTree();
                console.log(s)
                setNodes(s);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card flex justify-content-center">

            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
        // <div className="card">
        //     <h5>Files</h5>
        //     <Tree
        //         value={nodes}
        //         selectionMode="checkbox"
        //         className="w-full"
        //     />
        // </div>
    );


    // useEffect(() => {
    //   console.log("iok")
    //   const fetchData = async () => {
    //     try {
    //   console.log("iosk")

    //       await authenticate();
    //       console.log("sok")
    //       var s = await getSlime();
    //       console.log(s)
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchData();
    // }, []);

    // return (
    //   <div>fog</div>
    // );
}