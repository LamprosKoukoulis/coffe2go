import React,{useState} from "react";
import { Stack, Button } from "@mui/material";
import { useView } from "./ViewContext";


export default function WelcomeActions() {
  const {setView,setRole}= useView();
  return (
    <Stack spacing={2} width="100%">
      <Button variant="contained" size="large" fullWidth onClick={() => setView("signin")}>
        Login
      </Button>

      <Button variant="outlined" size="large" fullWidth onClick={() => setView("signup")}>
        Sign Up
      </Button>

      <Button variant="text" size="large" fullWidth onClick={() => {setRole("guest"),  setView("dashboard")}}>
        Continue as Guest
      </Button>
    </Stack>
  );
}
