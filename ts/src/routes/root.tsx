import { Outlet, Link } from "react-router-dom";
import SidePanel from "components/sidebar.tsx";
import {useState} from "react";

// Define type for contact
type Contact = {
    id: number;
    name: string;
};

// Example data for contacts
const contacts: Contact[] = [
    { id: 1, name: "Your Name" },
    { id: 2, name: "Your Friend" }
];

export default function Root() {

    const [selectedContent, setSelectedContent] = useState('content1'); // Initial content

    const handleContentChange = (content: string) => {
        setSelectedContent(content);
    };

    return (
        <div className='layout-container layout-wrapper layout-dark layout-static' data-theme="dark">
            <aside className="layout-sidebar">
                <SidePanel onContentChange={handleContentChange}/>

            </aside>
            <div className="layout-content">
                <div className="layout-content-inner">
                    <div id="detail">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}
