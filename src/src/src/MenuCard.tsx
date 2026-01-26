import { Card, CardContent, Typography } from '@mui/material';
import type { MenuItem } from './MenuData';

// Ορίζουμε τι περιμένει να λάβει αυτό το component
interface Props {
  item: MenuItem;
}

export const MenuCard = ({ item }: Props) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
          {item.price}€
        </Typography>
      </CardContent>
    </Card>
  );
};