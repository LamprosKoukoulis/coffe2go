import { Box } from "@mui/material";

export default function PageCenter({children, backgroundImage= null }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: 0,

        ...(backgroundImage &&{
          backgroundImage :`url(${backgroundImage})`,
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
