import React from 'react';
import { Container, Typography, Box, Button, List, ListItem, Divider, Paper } from '@mui/material';
import { useView } from '../components/ViewContext';

export default function Cart() {
  // Calculate total price
  const {setView,cart}= useView();
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  console.table(cart)
  return (
    <Container maxWidth="sm" sx={{ mt: 2, mb: 4 }}>
      {/* Back Button */}
      <Button 
        onClick={() => setView("openShop")}
         sx={{
            mb: 3,
            textTransform: 'none',
            fontWeight: 'bold',
            }}>
        ← Επιστροφή στο Μενού
      </Button>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Το Καλάθι μου
      </Typography>

      {cart.length === 0? (
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography variant="h6" color="text.secondary">
            Το καλάθι σου είναι άδειο 
          </Typography>
          <Button variant="contained" onClick={() => setView("openShop")} sx={{ mt: 2, borderRadius: 3 }}>
            Πήγαινε στο Μενού
          </Button>
        </Box>
      ) : (
        <>
          <Paper elevation={0} sx={{ border: '1px solid #f0f0f0', borderRadius: 2, overflow: 'hidden' }}>
            <List disablePadding>
              {cart.map((item, index) => (
                <Box key={index}>
                  <ListItem sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {item.quantity}x {item.name}
                      </Typography>
                      {/* Display extra options (e.g., sugar, milk) */}
                      <Typography variant="body2" color="text.secondary">
                        {item.option} {item.comment && `| ${item.comment}`}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {(item.price * item.quantity).toFixed(2)}€
                    </Typography>
                  </ListItem>
                  {index < cart.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>

          {/* Total and Checkout */}
          <Box sx={{ mt: 4, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Σύνολο</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalPrice.toFixed(2)}€</Typography>
            </Box>
            
            <Button 
              variant="contained" 
              fullWidth 
              size="large" 
              onClick={() => setView("checkout")}
              sx={{ 
                bgcolor: 'primary', 
                py: 2, 
                borderRadius: 3, 
                fontWeight: 'bold',
                fontSize: '1.1rem',
                '&:hover': { bgcolor: '!background.default' }
              }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}