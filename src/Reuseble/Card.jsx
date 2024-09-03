import { Box, Typography } from '@mui/material'
import React from 'react'

function Card(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box display="flex"
        alignItems="center"
        flexDirection='column'

        sx={{
          position: 'absolute', right: '0%', top: '0%',
          height: { xs: '45px', sm: '50px', md: '55px', lg: '60px', },
          width: { xs: '45px', sm: '50px', md: '55px', lg: '60px', },
          mx: { xs: '10px', sm: '20px', md: '10px', lg: '10px', },
          borderRadius: '0px 10px', backgroundColor: '#008ECC', color: 'white',
          scrollSnapAlign: "center",
        }}>
        <Typography sx={{ fontSize: { xs: '13px', sm: '15px', md: '17px', lg: '19px', } }}>{props.Mobile.Discount}</Typography>
        <Typography sx={{ fontSize: { xs: '15px', sm: '17px', md: '19px', lg: '21px', } }}>OFF</Typography>
      </Box>

      <Box sx={{
        height: { xs: '235px', sm: '255px', md: '275px', lg: '295px', },
        width: { xs: '167px', sm: '187px', md: '207px', lg: '227px', },
        borderRadius: '10px',
        mx: { xs: '10px', sm: '20px', md: '10px', lg: '10px', },
        my: '10px',
        border: '1px solid #EDEDED',
        backgroundColor: '#F5F5F5',
        '&:hover': {
          borderColor: 'blue',
          boxShadow: '0px 0px 14px 0px rgba(176,169,176,1)', 
        },
      }}>

        <Box display='flex' justifyContent="center"
          sx={{
            height: { xs: '175px', sm: '185px', md: '195px', lg: '205px', },
            width: { xs: '167px', sm: '187px', md: '207px', lg: '227px', },
            borderRadius: '10px', backgroundColor: '#F5F5F5'
          }}>
          <Box
            component="img"
            src={props.Mobile.img}
            alt=""
            sx={{
              maxHeight: 'auto',
              maxWidth: 'auto'
            }}
          />

        </Box>
        <Box sx={{
          height: { xs: '40px', sm: '50px', md: '60px', lg: '70px', },
          width: { xs: '147px', sm: '167px', md: '187px', lg: '207px', },
          borderRadius: '0px 0px 10px 10px',
          p: '10px', backgroundColor: 'white'
        }}>

          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', } }} >
            {props.Mobile.name}
          </Typography>
          <Typography sx={{ fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px', } }} >
            {props.Mobile.price}
          </Typography>


        </Box>
      </Box>


    </Box>

  )
}

export default Card
