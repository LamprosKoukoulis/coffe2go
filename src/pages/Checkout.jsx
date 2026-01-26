import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useView } from '../components/ViewContext';

export default function Payment() {
  const { cart, setCart, setView ,resetAll} = useView();
  
  // Calculate total from context
  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0).toFixed(2);

  const handlePay = () => {
    alert("Η πληρωμή ολοκληρώθηκε!");
    resetAll(); // Clear the cart
    setView("dashboard"); // Go back home
  };

  return (
    <Box sx={{ maxWidth: 450, mx: 'auto', p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>Πληρωμή</Typography>

      {/* --- Part 1: The Order Summary --- */}
      <List disablePadding>
        {cart.map((item, i) => (
          <ListItem key={i} sx={{ px: 0 }}>
            <ListItemText primary={item.name} />
            <Typography variant="body2">{item.price}€</Typography>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem sx={{ px: 0 }}>
          <Typography variant="subtitle1" fontWeight="bold">Σύνολο:</Typography>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 'auto' }}>{total}€</Typography>
        </ListItem>
      </List>

      {/* --- Part 2: The Inputs --- */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <TextField label="Αριθμός Κάρτας" fullWidth variant="outlined" placeholder="0000 0000 0000 0000" required/>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField label="Λήξη" placeholder="MM/YY" sx={{ flex: 1 }} required/>
          <TextField label="CVV" placeholder="123" sx={{ flex: 1 }} required/>
        </Box>

        <TextField label="Ονοματεπώνυμο Κατόχου" fullWidth required/>

        <Button 
          variant="contained" 
          size="large" 
          fullWidth 
          sx={{ mt: 2, bgcolor: 'primary.main', height: 56 }}
          onClick={handlePay}
        >
          Πληρωμή {total}€
        </Button>
      </Box>
    </Box>
  );
}