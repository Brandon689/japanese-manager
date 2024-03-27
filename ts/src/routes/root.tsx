import { Outlet } from "react-router-dom";
import SidePanel from "components/sidebar.tsx";

export default function Root() {

    return (
        <div className='layout-container layout-wrapper layout-dark layout-static' data-theme="dark">
            <aside className="layout-sidebar">
                <SidePanel/>
            </aside>
            <div className="layout-content">
                <div className="layout-content-inner">

                        <Outlet/>

                </div>
            </div>
        </div>
    );
}
