import { Container, Typography, Box } from '@mui/material';
import { menuItems } from './MenuData';
import { MenuRow } from './MenuRow';
import { Header } from './Header';
import { useState } from 'react';
import { Cart } from './Cart';

function App() {
  const categories = [
    { id: 'Coffee', label: 'Καφέδες' },
    { id: 'Drinks', label: 'Soft Drinks & Χυμοί' },
    { id: 'Food', label: 'Μικρογεύματα' }
  ];
  const [cart, setCart] = useState<any[]>([]); //Εδώ αποθηκεύονται οι παραγγελίες
  const [view, setView] = useState('menu'); //'menu' ή 'cart'

  // Συνάρτηση για προσθήκη στο καλάθι
  const addToCart = (orderItem: any) => {
    setCart((prevCart) => [...prevCart, orderItem]);
  };


  return (
    <Box>
      <Header 
        cartCount={cart.length} 
        onCartClick={() => setView('cart')} 
      />
    <Container maxWidth="sm" sx={{ mt: 4, mb: 10 }}>
      {view === 'menu' ? (
        <>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        MENU
      </Typography>

      {categories.map((cat) => (
        <Box key={cat.id} sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 'bold', mb: 2, pb: 1, 
            borderBottom: '2px solid #000',
            position: 'sticky', top: 0, bgcolor: 'white', zIndex: 10
          }}>
            {cat.label}
          </Typography>

          {menuItems
            .filter(item => item.category === cat.id)
            .map(item => (
              <MenuRow key={item.id} item={item} addToCart={addToCart} />
            ))
          }
        </Box>
      ))}
      </>
      ) : (
          /* ΣΕΛΙΔΑ ΚΑΛΑΘΙΟΥ */
          <Cart 
            cartItems={cart} 
            onBack={() => setView('menu')} 
          />
        )}
    </Container>
    </Box>
  );
}

export default App;