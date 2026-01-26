import { Box, Button } from "@mui/material";

export default function ActionBar({ canCall, onCall }) {
    return (
            <Button
            size="large"
            variant="contained"
            disabled={!canCall}
            onClick={onCall}
            color="text.primary"
            sx={{mt:3,
            width:"100%",
            backgroundColor:"background.paper"
            }}
            >
            Call Robot
            </Button>
    );
}
