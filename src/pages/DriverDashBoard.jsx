import { Box, Typography } from "@mui/material";
import { useState } from "react";
import QRScanCard from "../components/QRScanCard";
import RouteInfo from "../components/RouteInfo";
import CoffeeOrder from "../components/CoffeeOrder";

export default function UserDashboard() {
  const [route, setRoute] = useState(null);

  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h5" mb={3}>
        User Dashboard
      </Typography>

      {!route ? (
        <QRScanCard onScan={setRoute} />
      ) : (
        <>
          <RouteInfo route={route} />
          <CoffeeOrder eta={route.etaWindow} />
        </>
      )}
    </Box>
  );
}
