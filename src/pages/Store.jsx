import { Container, Typography, Box } from '@mui/material';
import { menuItems } from '../components/MenuData';
import { MenuRow } from '../components/MenuRow';
import { useState } from 'react';
import { useView } from '../components/ViewContext';
import  Cart from './Cart';

function Shop() {
//Εδώ αποθηκεύονται οι παραγγελίες
  const {view, setView, addToCart} = useView(); //'menu' ή 'cart'
  const categories = [
    { id: 'Coffee', label: 'Καφέδες' },
    { id: 'Drinks', label: 'Soft Drinks & Χυμοί' },
    { id: 'Food', label: 'Μικρογεύματα' }
  ];

  const handleAdd =(item) => {
    ;
  }

  return (
    <Box>
    <Container maxWidth="sm" sx={{ mt: 4, mb: 10 }}>
      {view === "openShop" ? (
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
            onBack={() => setView('openShop')} 
          />
        )}
    </Container>
    </Box>
  );
}

export default Shop;