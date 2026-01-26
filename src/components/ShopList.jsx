import { Container, Box, Typography, Card, CardActionArea, CardContent, CardMedia, Rating } from '@mui/material';
import { shops } from './MenuData';
import { useView } from './ViewContext';
export const ShopList = ({ onSelectShop }) => {
    const {setView}= useView();
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>Συνεργαζόμενα Καταστήματα</Typography>
      {shops.map((shop) => (
        <Card key={shop.id} sx={{ mb: 2, borderRadius: 3, boxShadow: 2 }}
        onClick={() =>setView("openShop")}
        onBack={() => setView("dashboard")}>
          <CardActionArea onClick={onSelectShop}>
            <Box sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 120, height: 120 }}
                image={shop.imageUrl}
                alt={shop.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{shop.name}</Typography>
                <Typography variant="body2" color="text.secondary">{shop.address}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Rating value={shop.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="caption" sx={{ ml: 1 }}>{shop.rating}</Typography>
                </Box>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
};