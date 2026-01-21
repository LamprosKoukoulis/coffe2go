import { Box, Typography, Paper } from "@mui/material";
import WelcomeActions from "../components/WelcomeActions";
import {useView} from "../components/ViewContext"

export default function WelcomePage() {
  const {isLogedIn}=useView();
  return (
    <Box
      sx={{  
        // minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position: "relative",
        m:2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 360,
          textAlign: "center",
          borderRadius: 7,
          backgroundColor: "rgba(255,255,255,0.85)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Coffee2Go ☕
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Order your coffee during the ride
        </Typography>
        {!isLogedIn ?<WelcomeActions />:<Box sx={{color: "rgb(255, 0, 0)"}}>Navigate Through The Navigation Bar at the Top!</Box>}
      </Paper>
    </Box>
  );
}
