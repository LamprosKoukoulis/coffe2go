import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
export default function EnergyPanel() {
  const [energy, setEnergy] = useState(12);
  const [openRoof,setOpenRoof]= useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((e) => (Math.random(Boolean)?e + Math.random():e-Math.random()));
    }, 2000);

    return () => clearInterval(interval);
  }, [openRoof]);

  return (
    <section style={card}>
      <h2>Φωτοβολταϊκά & Οροφή</h2>

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
      <p>Κατανάλωση: 8.3 kWh</p>

        <Button
        variant="contained"
        color={openRoof ? "warning" : "success"}
        onClick={() => setOpenRoof(!openRoof)}
        sx={{ mt: 2 }}
      >
        {openRoof ? "Κλείσιμο Οροφής" : "Άνοιγμα Οροφής"}
      </Button>
    </section>
  );
}

const card = {
  padding: 16,
  borderRadius: 10,
};
