import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function CleaningMethodSelector({ method, setMethod }) {
  return (
    <>
      <ToggleButtonGroup
        fullWidth
        exclusive
        value={method}
        onChange={(e, value) => value && setMethod(value) }
        color="text.primary"
        sx={{
          "& .MuiToggleButton-root.Mui-selected":{
            backgroundColor:"primary.main",
              "&:hover":{
              backgroundColor:"primary.dark",
            }
          }
        }}
        
      >
        <ToggleButton value="quick">Γρήγορο</ToggleButton>
        <ToggleButton value="deep">Ολοκληρωμένο</ToggleButton>
        <ToggleButton value="sanitize">Σφουγγάρισμα</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
