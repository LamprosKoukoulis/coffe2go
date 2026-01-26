import { Box, Typography, IconButton, Badge, Container } from '@mui/material';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  return (
    <Box sx={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      bgcolor: 'white', 
      borderBottom: '1px solid #f0f0f0',
      py: 1
    }}>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
          Smart Menu
        </Typography>

        <IconButton onClick={onCartClick} sx={{ color: '#1a1a1a' }}>
          <Badge badgeContent={cartCount} color="error">
            <span style={{ fontSize: '26px' }}>🛒</span>
          </Badge>
        </IconButton>
      </Container>
    </Box>
  );
};