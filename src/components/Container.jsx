import { Box } from "@mui/material";

export default function PageCenter({children, backgroundImage= null }) {

  return (
      <Box
      sx={{
        flex:1,
        width: "100%",
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        gap:2,
        ...( backgroundImage &&{

          backgroundImage :`url(${backgroundImage})`,
          height:"100vh",
          backgroundSize: "cover",
          backgroundPosition : "center",
          backgroundRepeat: "no-repeat",
        }),       
      }}
      >
      {children}
    </Box>
  );
}
