import { Paper, Typography, List, ListItem } from "@mui/material";

export default function RouteInfo({ route }) {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6">{route.routeName}</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Bus {route.busId} · Next stop: {route.nextStop}
      </Typography>

      <Typography variant="subtitle2">Stops:</Typography>
      <List dense>
        {route.stops.map((stop) => (
          <ListItem key={stop}>• {stop}</ListItem>
        ))}
      </List>
    </Paper>
  );
}
