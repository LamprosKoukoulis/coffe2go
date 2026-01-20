import { Paper, Typography, Button, Stack } from "@mui/material";

export default function CoffeeOrder({ eta }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={1}>
        Order Coffee
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={2}>
        Estimated delivery time: {eta}
      </Typography>

      <Stack spacing={1}>
        <Button variant="outlined">Espresso</Button>
        <Button variant="outlined">Cappuccino</Button>
        <Button variant="outlined">Latte</Button>
      </Stack>
    </Paper>
  );
}
