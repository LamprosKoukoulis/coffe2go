import { Box, Typography } from "@mui/material";
import { useView } from "../components/ViewContext";
import QRScanCard from "../components/QRScanCard";
import RouteInfo from "../components/RouteInfo";

export default function UserDashboard() {
  const {route} =useView();

  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h5" marginBottom={3} sx={{textAlign: "center"}}>
        User Dashboard
      </Typography>

      {!route ? <QRScanCard /> :  <RouteInfo /> }
    </Box>
  );
}
