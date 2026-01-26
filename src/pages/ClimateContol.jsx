import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Tooltip,IconButton } from "@mui/material";
import DriverCard from '../components/DriverCard';

export default function ClimateControl({mode,setMode}) {
  const getButtonStyle = (targetMode) => ({
    backgroundColor: mode === targetMode ? "rgba(76, 175, 80, 0.2)" : "transparent",
    border: mode === targetMode ? "2px solid #2a7f2d" : "2px solid transparent",
    transition: "all 0.3s ease",
    borderRadius: "15px",
    mx: 1
  });
  const delay=200;
  return (
    <DriverCard 
    name={
      <>
        <ThermostatIcon sx={{verticalAlign:"middle", mr:2}}/>
        Κλιματισμός
     </>
    }>
      <h2></h2>
      <p>Θερμοκρασία: 26°C</p>
      <Tooltip title="Ψύξη" enterDelay={delay} enterNextDelay={delay} arrow>
      <IconButton onClick={() => setMode("cooling")} sx={getButtonStyle("cooling") }>  <AcUnitIcon sx={{color:"rgb(49, 93, 150)"}}/></IconButton>
      </Tooltip>
      <Tooltip title="Θέρμανση" enterDelay={delay} enterNextDelay={delay} arrow>
      <IconButton onClick={() => setMode("heating")} sx={getButtonStyle("heating")}>  <WhatshotIcon sx={{color:"rgb(167, 74, 17)"}}/></IconButton>
      </Tooltip>
      <Tooltip title="Απενεργοποίηση" enterDelay={delay} enterNextDelay={delay} arrow>
      <IconButton onClick={() => setMode("off")}     sx={getButtonStyle("off")}>      <HighlightOffIcon sx={{color:"rgb(145, 6, 6)"}} /></IconButton>
      </Tooltip>
      {mode==="off" &&
        <p style={{ color: "green" }}>
        Εξοικονόμηση 1.2kWh
      </p>}
    </DriverCard>
  )
}

