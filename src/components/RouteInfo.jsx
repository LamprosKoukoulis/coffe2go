import { Paper, Typography, List, ListItem, Button } from "@mui/material";
import { useView } from "./ViewContext";

export default function RouteInfo({ route }) {
  let nextStopFound =false;
  let color ="error";
  let isClickable =false;
  const {setStop,setView} = useView();
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6">{route.routeName}</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Bus {route.busId} · Next stop: {route.nextStop}
      </Typography>

      <Typography variant="subtitle2">Stops:</Typography>
      <List dense>
        {route.stops.map((stop) => {

          if (stop === route.nextStop){
            color="success";
            isClickable = true;
            nextStopFound =true;
          } else if(nextStopFound){
            color = "warning";
          }
          return(
            <ListItem key={stop} disableGutters>
              <Button
              fullWidth
              variant="contained"
              color={color}
              disabled={!isClickable}
              sx={{
                justifyContent:"flex-start",
                textTransform: "none",
              }}
              onClick={() => {setView("openShop"),setStop(stop), console.log("Clicked stop:",stop)
              }}
              >
                {stop}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
