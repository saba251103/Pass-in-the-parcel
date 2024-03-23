import React from "react";
import "./App.css";
import sound1 from "./sound1.mp3";
import sound2 from "./sound2.mp3";
import sound3 from "./sound3.mp3";
import sound4 from "./sound4.mp3";
import sound5 from "./sound5.mp3";
import sound6 from "./sound6.mp3";
import sound7 from "./sound7.mp3";
import sound8 from "./sound8.mp3";
import sound9 from "./sound9.mp3";
import sound10 from "./sound10.mp3";
import background from './background.png';
import album from "./album.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const ColorButton = styled(Button)({
  color: "white",
  backgroundColor: blueGrey[700],
  "&:hover": {
    backgroundColor: blueGrey[900],
  },
});

const App = () => {
  const playSound = () => {
    const music = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10];
    const musicselect = Math.floor(Math.random() * music.length);
    const audio = new Audio(music[musicselect]);
    audio.play();
    const time = Math.floor(Math.random() * 30);
    const time1 = time * 1000;
    setTimeout(() => {
      audio.pause();
    }, time1);
    console.log(`Playing sound for ${time} seconds`);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: blueGrey[700] }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            PASS IN THE PARCEL
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Adjust transparency here
            borderRadius: "10px",
            padding: "20px",
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '70%'
          }}
        >
          <Box sx={{ width: '50%', marginRight: '20px' }}>
            <img src={album} alt="Album Cover" style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: '10px' }} />
          </Box>
          
          <Card sx={{ width: '50%', textAlign: 'center', backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
            <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: '20px',zIndex:20 }}>
              <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'justify' }}>
                "Embrace the rhythm of life with PASS IN THE PARCEL, where every beat carries the promise of adventure. Let the melodies guide you through moments of anticipation and excitement, as each sound ignites the spirit of connection and joy."
              </Typography>
            </Card>
            <ColorButton variant="contained" onClick={playSound}>Play</ColorButton>
          </Card>
        </Box>
        
      </Container>
    </div>
  );
};

export default App;
