import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function View() {
  const videoRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [now, setNow] = useState(new Date());

  // Timer για την ώρα (HH:MM:SS)
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play();

    const preventSeek = () => {
      if (Math.abs(video.currentTime - lastTimeRef.current) > 0.4) {
        video.currentTime = lastTimeRef.current;
      }
    };

    const trackTime = () => {
      lastTimeRef.current = video.currentTime;
    };

    video.addEventListener("seeking", preventSeek);
    video.addEventListener("timeupdate", trackTime);

    return () => {
      video.removeEventListener("seeking", preventSeek);
      video.removeEventListener("timeupdate", trackTime);
    };
  }, []);

    return (
        <Box
        sx={{
            bgcolor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "300px", 
            width: "100%",
        }}
        >
            <Box sx={{ position: "relative", width: "80%", height: "auto" }}>
              
                <iframe width="1365" 
                height="768"
                 src="https://www.youtube.com/embed/X2gSRq-4PIU?start=219&autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0"
                  title=""
                  style={{
                    pointerEvents:"none",
                  }}
                   frameborder="0"
                    allow="autoplay; encrypted-media;" 
                    referrerpolicy="strict-origin-when-cross-origin">
                </iframe>

                <Typography
                sx={{
                    position: "absolute",
                    bottom: 10, 
                    left: 10,   
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.6)",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: "medium",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                  }}>
                {now.toLocaleDateString("el-GR")} | {now.toLocaleTimeString("el-GR")}
                </Typography>
            </Box>
        </Box>
    );
}