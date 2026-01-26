import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function TimeSelector({ time, setTime }) {
  return (
    <>
      <ToggleButtonGroup
        fullWidth
        exclusive
        value={time}
        onChange={(e, value) => value && setTime(value)}
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
        <ToggleButton value="now">Άμεσα</ToggleButton>
        <ToggleButton value="10">Σε 10'</ToggleButton>
        <ToggleButton value="next">Επόμενη στάση</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
