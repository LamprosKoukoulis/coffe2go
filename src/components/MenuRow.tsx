import { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { OrderDialog } from './OrderDialog';
import type { MenuItem } from './MenuData';

interface Props {
  item: MenuItem;
  addToCart: (order: any) => void;
}

export const MenuRow = ({item, addToCart }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box 
        onClick={() => setOpen(true)} //Αναδυόμενο παράθυρο για παραγγελία του είδους
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          py: 2, 
          px: 1, 
          borderBottom: '1px solid #eee',
          cursor: 'pointer',
          '&:hover': { bgcolor: '#fafafa' } 
        }}
      >
        <Avatar 
          src={item.imageUrl || "https://via.placeholder.com/80"} 
          variant="rounded"
          sx={{ width: 80, height: 80, mr: 2 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {item.price ? item.price.toFixed(2) : "0.00"}€
          </Typography>
        </Box>
      </Box>

      {/*Το Dialog ανοίγει μόνο αν open === true */}
      {open && (
        <OrderDialog 
          item={item} 
          open={open} 
          onClose={() => setOpen(false)} 
          addToCart={addToCart} // Πέρασμα στο OrderDialog
        />
      )}
    </>
  );
};