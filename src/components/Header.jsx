import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import Container from "../components/Container"
import { useView } from "./ViewContext";


export default function Header() {
  const menus = {
    guest: [],
    user: ["View", 
      "Sightseeings", 
      "Order Coffee"
    ],
    driver: [
      "Navigation",
      "Control Temp",
      "Bus Roof & Solar",
      "Robot Vacuum",
    ],
  };
  
  const {setRole,role ,setView} = useView();
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
          {links.map((link) => (
            <Button
            key={link}
            color="inherit"
            sx={{ textTransform: "none" }}
            >
              {link}
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
              setView("welcomePage");
              setRole("guest");
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
