import { useState } from "react";
import {Button,Alert,Box } from "@mui/material";
import Container from "../components/Container";
import DriverCard from "../components/DriverCard";
import SeatMap from "../components/robot/seatMap";
import CleaningMethodSelector from "../components/robot/CleaningMethodSelector";
import TimeSelector from "../components/robot/TimeSelector";
import ActionBar from "../components/robot/ActionBar";
import RequestProgress from "../components/robot/RequestProgress";
import RobotETAInfo from "../components/robot/RobotETAInfo";
import RouteMap from "../components/robot/RouteMap";

export default function Robot() {
  const [seat, setSeat] = useState(null);
  const [openSeatmap,setOpenSeatMap] = useState(false);
  const [method, setMethod] = useState(null);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const callRobot = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 3000);
  };

  return (
    <Container>
        <Box sx={{ width: '100%', maxWidth: 500}}>
        <DriverCard name="Ρομπότ Καθαρισμού">
        {!confirmed ?(
          <Box sx={{display:"flex",flexDirection:"column", gap:2}}>
            <DriverCard name="Θέση" >
            <Box sx={{display:"flex", justifyContent:"center", mt:1}}>
            <Button
              variant="outlined"
              onClick={() => setOpenSeatMap(true)}
              sx={{
                color :"text.primary",
                backgroundColor:seat? "primary.main":"default",
                "&:hover": {
                  backgroundColor: seat ? "primary.dark" : "rgba(25, 118, 210, 0.04)",
                },
              }}
            >
              {seat? `Επιλεγμένη θέση ${seat}`: "Επιλέξτε θέση"}
            </Button> 
            </Box>
            <SeatMap
                open={openSeatmap}
                onClose={() => setOpenSeatMap(false)}
                selectedSeat= {seat}
                onSelectSeat={setSeat}/>
            </DriverCard>
            <DriverCard name="Μέθοδος">
            <CleaningMethodSelector method={method} setMethod={setMethod} />
            </DriverCard>
            <DriverCard name="Ώρα">
            <TimeSelector time={time} setTime={setTime} />
            </DriverCard>
            <ActionBar canCall={!!seat} onCall={callRobot} />
            {loading && <RequestProgress />}
          </Box>
        ):(
        <>
          <Alert severity="success" sx={{ mt: 3 }}>
              Το ρομπότ καθαρισμού κλήθηκε επιτυχώς
          </Alert>
          <RobotETAInfo />
          <RouteMap />
          {/* <ServiceRating /> */}
        </>
        )}
        
        </DriverCard>
        </Box>
    </Container>
  );
}
