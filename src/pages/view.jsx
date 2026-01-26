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
                
                <video
                ref={videoRef}
                src="/videos/route-view.mp4"
                preload="auto"
                autoPlay
                playsInline
                controls={false}
                loop
                style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "8px",
                }}/>

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