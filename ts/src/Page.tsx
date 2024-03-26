import { useState, useEffect } from 'react';
import './App.css';
import { authenticate } from 'api/auth';
import { getSlime } from 'api/collections';
import { Tree } from 'primereact/tree';

function DashboardPage() {

  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [selectedKeys, setSelectedKeys] = useState(null);
    useEffect(() => {
      console.log("iok")
      const fetchData = async () => {
        try {
      console.log("iosk")

          await authenticate();
          console.log("sok")
          var s = await getSlime();
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
    <h4>TSUBASA IS MY WAIFU</h4>

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
  
  export default DashboardPage;
  

// import { useState, useEffect } from 'react';
// import './App.css';
// import { authenticate } from 'api/auth';
// import { getCryptoList, getUsers } from 'api/collections';
// import { CryptocurrenciesResponse } from 'typings/pocketbase-types';

// function DashboardPage() {
//     const [crypto, setCrypto] = useState<CryptocurrenciesResponse[]>([]);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           await authenticate();
//           const u = await getUsers();
//           console.log(u);
//           const cryptoData = await getCryptoList();
//           console.log(cryptoData);
//           setCrypto(cryptoData)
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//           setLoading(false);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <>
//         {crypto.map((p) => (
//           <div key={p.id}>
//             <span>{p.name}</span>
//             <span>{p.symbol}</span>
//           </div>
//         ))}
//       </>
//     );
//   }
  
//   export default DashboardPage;
  