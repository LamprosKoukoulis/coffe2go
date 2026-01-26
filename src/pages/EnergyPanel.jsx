import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import DriverCard from "../components/DriverCard";
import SolarPowerIcon from '@mui/icons-material/SolarPower';

export default function EnergyPanel({mode}) {
  const [energy, setEnergy] = useState(12);
  const [openRoof,setOpenRoof]= useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((e) => (Math.random() >0.5?e + Math.random():e-Math.random()));
    }, 2000);

    return () => clearInterval(interval);
  }, [openRoof]);

  return (
    <DriverCard name={
      <>
      <SolarPowerIcon sx={{verticalAlign:"middle" ,mr:2, color:"rgb(34, 116, 217)"}} />
      "Φωτοβολταϊκά & Οροφή"
      </>
    }>
      <p>Οροφή: {" "} 
      <strong>{openRoof?(
        <>
        Ανοιχτή <SunnyIcon style={{color:"rgb(218, 140, 15)"}} />
        </>
      ):(
        <>
        Κλειστή <CloudySnowingIcon style={{color:"rgb(53, 85, 153)"}}/> 
        </>      
      )}
      </strong>
      </p>
      <p>Παραγόμενη ενέργεια: {energy.toFixed(1)} kWh</p>
      <p>Κατανάλωση: {mode==="off"? "7.1 Kwh": "8.3 kWh"}
      </p>

        <Button
        variant="contained"
        color={openRoof ? "warning" : "success"}
        onClick={() => setOpenRoof(!openRoof)}
        sx={{ marginTop:0 }}
      >
        {openRoof ? "Κλείσιμο Οροφής" : "Άνοιγμα Οροφής"}
      </Button>
    </DriverCard>
  );
}

