import { Book, Note } from '@mui/icons-material';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'

type Props =
{
    sidebarWidth: number;
}

export const Sidebar = (props: Props) =>
{
    return (
        <div className="Sidebar">
            <ProSidebar width={props.sidebarWidth}>
                <SidebarHeader>
                    <Menu iconShape="square">
                        <SubMenu title="NoteBooks" icon={<Book />}>
                            <MenuItem>NoteBook 1</MenuItem>
                            <MenuItem>NoteBook 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<Note />}>Note 1</MenuItem>
                        <MenuItem icon={<Note />}>Note 2</MenuItem>
                        <MenuItem icon={<Note />}>Note 3</MenuItem>
                        <MenuItem icon={<Note />}>Note 4</MenuItem>
                        <MenuItem icon={<Note />}>Note 5</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
};