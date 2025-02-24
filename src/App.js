
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
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

const GlowingOrb = styled('div')(({ theme, size, isPlaying }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  backdropFilter: 'blur(8px)',
  transition: 'transform 3000ms ease-in-out',
  background: `radial-gradient(circle at 30% 30%, 
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%)`,
  boxShadow: `
    0 0 30px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.1)
  `,
  animation: isPlaying ? 'pulse 2s infinite' : 'none',
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

const PlayButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '96px',
  height: '96px',
  borderRadius: '50%',
  minWidth: 'unset',
  backdropFilter: 'blur(16px)',
  zIndex: 10,
  transition: 'all 300ms',
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  '&:active': {
    transform: 'translate(-50%, -50%) scale(0.95)',
  },
  '&.Mui-disabled': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const newOrbs = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 100 + 50,
      speed: Math.random() * 2 + 1,
      direction: Math.random() * Math.PI * 2
    }));
    setOrbs(newOrbs);
  }, []);

  const playSound = () => {
    const music = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10];
    const musicselect = Math.floor(Math.random() * music.length);
    const audio = new Audio(music[musicselect]);
    const time = Math.floor(Math.random() * 30);
    const time1 = time * 1000;

    setIsPlaying(true);
    audio.play();
    
    setTimeout(() => {
      audio.pause();
      setIsPlaying(false);
    }, time1);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        overflow: 'hidden',
      }}
    >
      {orbs.map((orb) => (
        <GlowingOrb
          key={orb.id}
          size={orb.size}
          isPlaying={isPlaying}
          sx={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
        />
      ))}

      <PlayButton
        variant="contained"
        onClick={playSound}
        disabled={isPlaying}
        sx={{
          backgroundColor: isPlaying ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <Typography variant="h4" sx={{ color: 'white' }}>
          {isPlaying ? '▶️' : '▶'}
        </Typography>
      </PlayButton>

      <Box
        sx={{
          position: 'absolute',
          top: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 2,
          }}
        >
          Pass in the Parcel
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          Experience the magic of random melodies
        </Typography>
      </Box>
    </Box>
  );
};

export default App;