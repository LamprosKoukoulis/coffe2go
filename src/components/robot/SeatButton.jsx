import { Button } from "@mui/material";

// SeatButton.js
export default function SeatButton({ seatId, selected, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant={selected ? "contained" : "outlined"}
      sx={{
        minWidth: '45px',
        height: '45px',
        borderRadius: '8px 8px 2px 2px', // Rounded at the top like a headrest
        borderBottom: selected ? 'none' : '4px solid #ccc', // Depth effect
        p: 0,
        fontSize: '0.75rem',
        bgcolor: selected ? 'primary.main' : "text.secondary",
        color: selected ? 'white' : 'text.primary',
        transition: 'all 0.15s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          bgcolor: selected ? 'primary.dark' : 'grey.200',
          transition:"all 0.2s ease in",
        },
      }}
    >
      {seatId}
    </Button>
  );
}
