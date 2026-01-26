import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoIcon from '@mui/icons-material/Info';
import DriverCard from '../components/DriverCard';
export default function DrivingAssist() {
  const data = {
    speed: 78,
    speedLimit: 70,
    laneWarning: true,
    tired: true,
    passengersLeaving: true,
  };

  return (
    <DriverCard name={
      <>
      <InfoIcon sx={{verticalAlign:"middle" ,mr:2}}/>
      Πληροφορίες
      </>
      }>
      <p>Ταχύτητα: {data.speed} km/h</p>
      {data.speed > data.speedLimit && <Alert text="Υπέρβαση ορίου ταχύτητας" />}

      {data.laneWarning && <Alert text="Απόκλιση από λωρίδα" />}
      {data.passengersLeaving && (
        <Alert text="Επιβάτες κατεβαίνουν – ΜΗΝ ξεκινήσετε" />
      )}
    </DriverCard>
  );
}

const Alert = ({ text }) => (
  <p style={{ color: "red", fontWeight: "bold" }}> <WarningAmberIcon style={{verticalAlign:"middle"}} /> {text}</p>
);


