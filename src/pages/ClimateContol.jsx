import { useState } from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Tooltip,Box } from "@mui/material";

export default function ClimateControl() {
  const [mode, setMode] = useState("cooling");

  return (
    <Box style={card} >
      <h2><ThermostatIcon style={{verticalAlign:"middle"}}/> Κλιματισμός</h2>
      <p>Θερμοκρασία: 26°C</p>
      <Tooltip title="Ψύξη">
      <button onClick={() => setMode("cooling")}><AcUnitIcon   sx={{color:"rgb(49, 93, 150)"}}/> </button>
      </Tooltip>
      <Tooltip title="Θέρμανση">
      <button onClick={() => setMode("heating")}><WhatshotIcon sx={{color:"rgb(167, 74, 17)"}}/></button>
      </Tooltip>
      <Tooltip title="Απενεργοποίηση">
      <button onClick={() => setMode("off")}><HighlightOffIcon sx={{color:"rgb(145, 6, 6)"}} /></button>
      </Tooltip>

      <p>
        Κατάσταση: <strong>{mode}</strong>
      </p>

      <p style={{ color: "green" }}>
        Εξοικονόμηση 1.2kWh
      </p>
    </Box>
  );
}

const card = {
  padding: 16,
  borderRadius: 10,
};
