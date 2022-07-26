import './canvas.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import { fabric } from 'fabric';
import { useEffect } from 'react';

const CanvasId = "canvas";

type Props =
{
    sidebarWidth: number;
}

export const Canvas = (props: Props) =>
{
    useEffect(() =>
    {
        const canvas = new fabric.Canvas(CanvasId,
        {
            isDrawingMode: true,
            backgroundColor: "#08beaf",
            width: 1000,
            height: 1000
        });
    });

    

    return (
        <div className="Canvas">
            <Box sx={{ display: "flex" }}>
                <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${props.sidebarWidth}px)` } }}>
                    <Toolbar>Header</Toolbar>
                </AppBar>
                <canvas id={CanvasId} />
            </Box>
        </div>
    );
}