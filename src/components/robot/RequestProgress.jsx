import { Box, LinearProgress, Typography } from "@mui/material";

export default function RequestProgress() {
  return (
    <Box mt={3}>
      <Typography>Επεξεργασία αιτήματος...</Typography>
      <LinearProgress />
    </Box>
  );
}
