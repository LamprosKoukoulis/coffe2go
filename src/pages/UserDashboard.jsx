import { Box, Typography } from "@mui/material";
import { useView } from "../components/ViewContext";
import QRScanCard from "../components/QRScanCard";
import RouteInfo from "../components/RouteInfo";
import MyAlert from "../components/MyAlert";
export default function UserDashboard({showAlert=false}) {
  const {route} =useView();

  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>

    <MyAlert showAlert={showAlert}/>
      <Typography variant="h5" marginBottom={3} sx={{textAlign: "center"}}>
        User Dashboard
      </Typography>

      {!route ? <QRScanCard /> :  <RouteInfo /> }
    </Box>
  );
}
