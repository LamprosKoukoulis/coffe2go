import { useEffect,useState } from "react";
import DrivingAssist from "./DrivingAssist";
import ClimateControl from "./ClimateContol";
import EnergyPanel from "./EnergyPanel";
import TiredAlert from "./TiredAlert";
import {Box,Typography} from "@mui/material";

export default function DriverDashBoard() {
  const [showAlert,setShowAlert] = useState(null);
  const [acMode, setAcMode] = useState("off");

  useEffect(() =>{
    window.triggerTiredAlert =() =>{
      setShowAlert(true);
    };
  },[]);
  return (
    <>
      <Typography variant="h5" mb={3}>
        Driver Dashboard
      </Typography>
        <Box style={styles.dashboard} sx={{ width: "95%"}}>

          <DrivingAssist />
          <ClimateControl mode={acMode} setMode={setAcMode}/>
          <EnergyPanel mode={acMode} />

          {showAlert &&(
            <TiredAlert onClose={()=> setShowAlert(false)} />
          )}
      </Box>
    </>
  );
}

  const styles = {
  dashboard: {
    flex:1,
    height: "80vh",
    padding: 24,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto 1fr 1fr",
    gap: 16,
  },
};
