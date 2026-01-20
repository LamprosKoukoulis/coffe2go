import { Box, Typography, Paper } from "@mui/material";
import WelcomeActions from "../components/WelcomeActions";


export default function WelcomePage() {
  return (
    <Box
      sx={{  
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 360,
          textAlign: "center",
          borderRadius: 3,
          opacity: "85%"
        }}
      >
        <Typography variant="h4" gutterBottom>
          Coffee2Go ☕
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Order your coffee during the ride
        </Typography>

        <WelcomeActions />
      </Paper>
    </Box>
  );
}
