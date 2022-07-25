import { Book, Note } from "@mui/icons-material";
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css"

function Sidebar()
{
    return (
        <div className="Sidebar">
            <ProSidebar>
                <SidebarHeader>
                    <div style=
                    {{
                        padding: "24px"
                    }}>Test App</div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="NoteBooks" icon={<Book />}>
                            <MenuItem>NoteBook 1</MenuItem>
                            <MenuItem>NoteBook 2</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<Note />}>Dashboard</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;