import { Box, Dialog, DialogTitle, DialogContent, Button, DialogActions } from "@mui/material";
import SeatButton from "./SeatButton";

const seats = Array.from({ length: 52 }, (_, i) => i + 1);

export default function SeatMap({ selectedSeat, onSelectSeat, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Επιλέξτε θέση καθαρισμού</DialogTitle>
    <DialogContent dividers sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.default' }}>
    <Box 
        display="grid" 
        // 5 Columns: 2 seats, 1 aisle (smaller), 2 seats
        gridTemplateColumns="repeat(2, 1fr) 40px repeat(2, 1fr)" 
        gap={1.5} 
        sx={{ 
        maxHeight: '60vh', 
        overflowY: 'auto', 
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: '20px',
        border: '2px solid #ccc',
        boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.1)'
        }}
    >
        {seats.map((seat, index) => {
        // Check if we need to insert an "Aisle" space
        // Since it's a 5-column grid, we skip the 3rd column (index 2, 7, 12...)
        const isAisle = (index + 1) % 5 === 3;

        return (
            <>
            {/* If the current grid cell is the aisle, put an empty Box */}
            {(index % 4 === 2) && <Box key={`aisle-${index}`} />} 
            
            <SeatButton
                key={seat}
                seatId={seat}
                selected={selectedSeat === seat}
                onClick={() => {
                onSelectSeat(seat);
                onClose();
                }}
            />
            </>
        );
        })}
    </Box>
    </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">Κλείσιμο</Button>
      </DialogActions>
    </Dialog>
  );
}