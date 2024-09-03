import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Addvetise() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://img.freepik.com/free-vector/advertising-agency-linkedin-banner-template_23-2150039892.jpg?w=1380&t=st=1723798249~exp=1723798849~hmac=c6d827b5d1c1555968a516841d23d0eacbfa23734d3a513dfa52605c15968578',
      alt: 'Smart1',
      caption: 'asdfgh',
    },
    {
      src: 'https://img.freepik.com/free-vector/flat-design-fashion-template_23-2150382726.jpg?w=1380&t=st=1723798398~exp=1723798998~hmac=78298386fc9daf568eaad3aa2d8a27fcd592731e87dfdeace3cdef39fe7d1bad',
      alt: 'Smart2',
      caption: 'adfgh',
    },
    {
      src: 'https://img.freepik.com/premium-psd/fashion-sale-social-media-banner-social-media-template_1257000-126.jpg?w=1380',
      alt: 'Smart3',
      caption: 'dfgh',
    },
    {
      src: 'https://img.freepik.com/free-vector/flat-design-fashion-template_23-2150382706.jpg?w=1380&t=st=1723798475~exp=1723799075~hmac=0cc1b8369cab7c864de08874f09c4f02bd30bbee7d22f20566b3b8c87587a13d',
      alt: 'Smart4',
      caption: 'asdf',
    },
  ];

  const handlePrev = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ position: 'relative', height: 'auto', width: 'auto', overflow: 'hidden', py: {xs:'10px',sm:'10px',md:'10px',lg:'30px'}, 
      }}
    >

      <Box
        display="flex"
        sx={{ position: 'absolute', left: '1%', height: 'auto', width: 'auto', overflow: 'hidden',zIndex:"2" }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: '#E0F0F3',
            color: 'black',
            padding: {
              xs: '8px 4px 8px 11px',
              sm: '10px 6px 10px 13px',
              md: '13px 7px 13px 18px',
              lg: '15px 9px 15px 20px',
              xl: '15px 9px 15px 20px',
            },
            border: '5px solid white',
            '&:hover': {
              backgroundColor: '#E0F0F3',
              color: '#333',
            },
          }}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: {
                xs: '14px',
                sm: '20px',
                md: '24px',
                lg: '28px',
                xl: '32px',
              }
            }}
          />
        </IconButton>
      </Box>

      {/* Adds images */}
      <Box display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ position: 'relative', height: { xs: '160px', sm: '250px', md: '300px', lg: '350px' }, width: '90%', overflow: 'hidden', }}
      >
        <Box component="img"
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          sx={{
            width: '100%',
            height: 'auto',
            transition: 'transform 1s ease',
          }}
        />
      </Box>


      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ position: 'absolute', right: '1%', height: 'auto', width: 'auto', overflow: 'hidden', }}
      >
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: '#F3F9FB',
            color: 'black',
            padding: {
              xs: '8px',
              sm: '10px',
              md: '13px',
              lg: '15px',
              xl: '15px',
            },
            border: '5px solid white',
            '&:hover': {
              backgroundColor: '#E0F0F3',
              color: '#333',
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: {
                xs: '14px',
                sm: '20px',
                md: '24px',
                lg: '28px',
                xl: '32px',
              }
            }}
          />
        </IconButton>
      </Box>

    </Box>
  );
};

export default Addvetise;
