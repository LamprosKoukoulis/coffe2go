import React, { useState, useEffect } from "react";
import { Alert, Collapse } from "@mui/material";
import { useView } from "./ViewContext";

const MyAlert= ({showAlert})=>{
    const {route} =useView();
    const [open, setOpen] = useState(false);
        
    useEffect(() => {
        if (showAlert && !route) {
            setOpen(true);
            
            // Set timer to close after 3 seconds
            const timer = setTimeout(() => {
                setOpen(false);
                }, 3000);
                
                return () => clearTimeout(timer); // Cleanup timer if component unmounts
            }
        }, [showAlert, route]);
    return(
        <Collapse in={open}>
        <Alert 
        severity="info" 
        variant="filled" 
        sx={{ 
            mb: 3, 
            bgcolor: 'primary.main', // Your coffee color
            color: 'white',
            // Simple entry animation (Pulse) when it appears
            animation: 'pulse 1.5s infinite ease-in-out',
            '@keyframes pulse': {
                '0%': { boxShadow: '0 0 0 0px rgba(111, 78, 55, 0.4)' },
                '70%': { boxShadow: '0 0 0 10px rgba(111, 78, 55, 0)' },
                '100%': { boxShadow: '0 0 0 0px rgba(111, 78, 55, 0)' },
            },
        }}
        >
        <strong>Route Required:</strong> Please scan your bus QR code first.
        </Alert>
    </Collapse>
)
};

export default MyAlert;