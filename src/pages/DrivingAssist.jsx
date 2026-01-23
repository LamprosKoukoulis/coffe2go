import WarningAmberIcon from '@mui/icons-material/WarningAmber';
export default function DrivingAssist() {
  const data = {
    speed: 78,
    speedLimit: 70,
    laneWarning: true,
    tired: true,
    passengersLeaving: true,
  };

  return (
    <section style={card}>
      <h2> Πληροφορίες </h2>

      <p>Ταχύτητα: {data.speed} km/h</p>
      {data.speed > data.speedLimit && <Alert text="Υπέρβαση ορίου ταχύτητας" />}

      {data.laneWarning && <Alert text="Απόκλιση από λωρίδα" />}
      {data.passengersLeaving && (
        <Alert text="Επιβάτες κατεβαίνουν – ΜΗΝ ξεκινήσετε" />
      )}
    </section>
  );
}

const Alert = ({ text }) => (
  <p style={{ color: "red", fontWeight: "bold" }}> <WarningAmberIcon style={{verticalAlign:"middle"}} /> {text}</p>
);

const card = {
  padding: 16,
  borderRadius: 10,
};

