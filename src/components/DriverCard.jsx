import {Box, Typography} from"@mui/material";

const DriverCard=({name,children}) =>{
return(
    <Box sx={{
        padding: 3,borderRadius: 10,border: "2px solid",
        bordercolor: "text.primary",transition:"0.2s", 
        alignItems:"center", justifyContent:"center",
        gap:2,
        "&:hover":{
            borderColor:"text.secondary",
            boxShadow:7}}}>
        <Typography fontWeight="bold" variant="h6" textAlign="center"> {name}</Typography>
        {children}
    </Box>
)}
export default DriverCard;
