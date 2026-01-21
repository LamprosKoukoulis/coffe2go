import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useView } from "./ViewContext";


export default function Header() {
  const menus = {
    guest: [],
    user: [{label: "View", view:"dashboard"},
           {label: "Sightseeings", view:"sightseeings"},
           {label: "Order Coffee", view:"dashboard"},
           {label: "Cart", view:"cart"},
    ],
    driver: [
      {label:"Navigation", view:"navigation"},
      {label:"Control Temp", view:"temperature"},
      {label:"Bus Roof & Solar", view:"solar"},
      {label:"Robot Vacuum", view:"robot"},
    ],
  };
  
  const {setRole,role ,setView,setIsLogedIn} = useView();
  const links = menus[role] || menus.guest;

  return (
    <AppBar position="relative" 
    sx={{ width: "100vw"}}>
      <Toolbar>
        <Button 
        variant="text"
        color= "inherit"
        onClick={() => setView("welcomePage")}
        sx={{
          textTransform:"none",
        }}>
          Coffe2Go ☕
        </Button>

        <Box sx ={{flexGrow: 1}}/>        {/* This pushes everything to the right */}
        <Box>
          {links.map(({label, view}) => (
            <Button
            key={label}
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={() => setView(view)}
            >
              {label}
            </Button>
          ))}
          {role === "guest" && (
            <Button
            variant="outlined"
            color="inherit"
            sx={{ ml: 2, textTransform: "none" }}
            onClick={() => setView("signin")}
            >
              Sign In
            </Button>
          )}
          {role != "guest" &&(
          <Button
            variant ="outlined"
            color = "inherit"
            onClick={() =>{
              setRole("guest");
              setIsLogedIn(false);
              setView("welcomePage");
            }}
            >
              Sign Out
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
