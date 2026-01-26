import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useView } from "./ViewContext";
import ColorModeSelect from "../theme/ColorModeSelect";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
  const menus = {
    guest: [,],
    user: [{label: "View", view:"view"},
           {label: "Sightseeings", view:"sightseeings"},
           {label: "Order Coffee", view:"dashboard"},
    ],
    driver: [
      {label:"Navigation", view:"dashboard"},
      {label:"Control Temp", view:"ac"},
      {label:"Bus Roof & Solar", view:"solar"},
      {label:"Robot Vacuum", view:"robot"},
    ],
  };
  
  const {setRole,role ,setView,isLogedIn,setIsLogedIn,resetAll} = useView();
  const links = menus[role] || menus.guest;

  return (
    <AppBar position="relative" 
    sx={{ width: "100vw"}}>
      <Toolbar>
        <Button 
        variant="text"
        color= "inherit"
        onClick={() => isLogedIn?setView("dashboard"):setView("welcomePage")}
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

            <Button
            variant="outlined"
            color="inherit"
            sx={{ ml: "5px", textTransform: "none" }}
            onClick={() => setView("cart")}
            >
              <ShoppingCartIcon/>
            </Button>

          {role === "guest" && (
            <Button
            variant="outlined"
            color="inherit"
            sx={{ ml: "5px", textTransform: "none" }}
            onClick={() => setView("signin")}
            >
              Sign In
            </Button>
          )}
          {role != "guest" &&(
          <Button
            variant ="outlined"
            color = "inherit"
            sx={{ ml: "5px", textTransform: "none" }}
            onClick={() =>{
              setRole("guest");
              setIsLogedIn(false);
              setView("welcomePage");
              resetAll();
            }}
            >
              Sign Out
            </Button>
          )}
          <Button
            variant="outlined"
            color = "inherit"
            sx={{ml:"5px",
            }}
            onClick={()=> setView("manual")}>
          manual
          </Button>
        <ColorModeSelect />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
