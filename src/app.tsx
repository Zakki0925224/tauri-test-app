import './app.css';
import { Sidebar } from './components/sidebar';
import { Canvas } from './components/canvas';

const SidebarWidth = 240; // px

export const App = () =>
{
    return (
        <div className="App">
            <Sidebar sidebarWidth={SidebarWidth} />
            <Canvas sidebarWidth={SidebarWidth} />
        </div>
    );
};