import { Container, Typography, Box, Button, List, ListItem, Divider, Paper } from '@mui/material';

interface CartProps {
  cartItems: any[];     // Η λίστα με τις παραγγελίες
  onBack: () => void;   // Συνάρτηση για επιστροφή στο μενού
}

export const Cart = ({ cartItems, onBack }: CartProps) => {
  
  // Υπολογισμός συνολικής τιμής
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Container maxWidth="sm" sx={{ mt: 2, mb: 4 }}>
      {/* Κουμπί Επιστροφής */}
      <Button onClick={onBack} sx={{ mb: 3, textTransform: 'none', fontWeight: 'bold' }}>
        ← Επιστροφή στο Μενού
      </Button>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Το Καλάθι μου
      </Typography>

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography variant="h6" color="text.secondary">
            Το καλάθι σου είναι άδειο 
          </Typography>
          <Button variant="contained" onClick={onBack} sx={{ mt: 2, borderRadius: 3 }}>
            Πήγαινε στο Μενού
          </Button>
        </Box>
      ) : (
        <>
          <Paper elevation={0} sx={{ border: '1px solid #f0f0f0', borderRadius: 2, overflow: 'hidden' }}>
            <List disablePadding>
              {cartItems.map((item, index) => (
                <Box key={index}>
                  <ListItem sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {item.quantity}x {item.name}
                      </Typography>
                      {/* Εμφάνιση των έξτρα επιλογών (π.χ. ζάχαρη, γάλα) */}
                      <Typography variant="body2" color="text.secondary">
                        {item.option} {item.comment && `| ${item.comment}`}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {(item.price * item.quantity).toFixed(2)}€
                    </Typography>
                  </ListItem>
                  {index < cartItems.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>

          {/* Σύνολο και Checkout */}
          <Box sx={{ mt: 4, p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Σύνολο</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalPrice.toFixed(2)}€</Typography>
            </Box>
            
            <Button 
              variant="contained" 
              fullWidth 
              size="large" 
              sx={{ 
                bgcolor: '#00c2e8', 
                py: 2, 
                borderRadius: 3, 
                fontWeight: 'bold',
                fontSize: '1.1rem',
                '&:hover': { bgcolor: '#009dbd' }
              }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};