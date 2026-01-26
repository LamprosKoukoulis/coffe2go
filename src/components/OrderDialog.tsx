import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, Typography, TextField, IconButton, Stack, 
  RadioGroup, FormControlLabel, Radio, FormControl, FormLabel,
  Box
} from '@mui/material';
import { useState, useEffect } from 'react';
import type { MenuItem } from './MenuData';

export interface Props {
  item: MenuItem | null;
  open: boolean;
  onClose: () => void;
  addToCart: (order: any) => void; //ΠΡΟΣΘΗΚΗ
}

export const OrderDialog = ({ item, open, onClose, addToCart }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [option, setOption] = useState('');

  //Μηδενισμός των επιλογών κάθε φορά που ανοίγει για νέο προϊόν
  useEffect(() => {
    if (open) {
      setQuantity(1);
      setComment('');
      setOption('');
    }
  }, [open, item]);

  if (!item) return null;

  const handleAdd = () => {
    // Φτιάχνουμε το αντικείμενο της παραγγελίας με τα τρέχοντα δεδομένα
    const newOrder = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity, // Η ποσότητα από το state
      option: option,     // Η επιλογή (π.χ. ζάχαρη) από το state
      comment: comment    // Το σχόλιο από το state
    };

    addToCart(newOrder); // Στέλνεται η παραγγελια στο App.tsx
    onClose();           // Κλείνει το παράθυρο
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold">{item.name}</Typography>
        <Typography variant="subtitle1" color="primary">{item.price.toFixed(2)}</Typography>
      </DialogTitle>

      <DialogContent dividers>
        {/* 1.Έλεγχος κατηγορίας για ειδικά πεδία */}
        {item.category === 'Coffee' && (
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend">Ζάχαρη</FormLabel>
            <RadioGroup value={option} onChange={(e) => setOption(e.target.value)}>
              <FormControlLabel value="Σκέτος" control={<Radio />} label="Σκέτος" />
              <FormControlLabel value="Μέτριος" control={<Radio />} label="Μέτριος" />
              <FormControlLabel value="Γλυκός" control={<Radio />} label="Γλυκός" />
            </RadioGroup>
          </FormControl>
        )}

        {item.category === 'Drinks' && (
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend">Μέγεθος</FormLabel>
            <RadioGroup value={option} onChange={(e) => setOption(e.target.value)}>
              <FormControlLabel value="Small" control={<Radio />} label="Small" />
              <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="Large" control={<Radio />} label="Large" />
            </RadioGroup>
          </FormControl>
        )}

        {/* 2.Ποσότητα */}
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Ποσότητα</Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton onClick={() => setQuantity(quantity + 1)}>
              +
            </IconButton>
          </Stack>
        </Box>

        {/* 3.Σχόλια */}
        <TextField
          fullWidth
          label="Σχόλια για την παραγγελία"
          multiline
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">ΑΚΥΡΩΣΗ</Button>
        <Button 
          variant="contained" 
          fullWidth 
          size="large"
          onClick={(handleAdd)}
        >
          ΠΡΟΣΘΗΚΗ ΠΑΡΑΓΓΕΛΙΑΣ 
        </Button>
      </DialogActions>
    </Dialog>
  );
};


