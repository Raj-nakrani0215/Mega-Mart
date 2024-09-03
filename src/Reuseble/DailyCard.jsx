import { Box, Typography } from '@mui/material'
import React from 'react'

function DailyCard(props) {
    return (
        <div>
            <Box sx={{
                height: { xs: '100px', sm: '120px', md: '130px', lg: '140px' },
                width: { xs: '100px', sm: '120px', md: '130px', lg: '140px' },
                borderRadius: '10px',
                mx: { xs: '10px', sm: '20px', md: '10px', lg: '10px' },
                my: '10px',
                border: '1px solid #EDEDED',
                backgroundColor: '#F5F5F5',
                display: 'flex', // Add this line to make the container a flexbox
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                '&:hover': {
                    borderColor: 'blue',
                    boxShadow: '0px 0px 14px 0px rgba(176,169,176,1)',
                },
            }}>

                <Box
                    component="img"
                    src={props.image}
                    alt=""
                    sx={{
                        width: '70%',

                        objectFit: 'cover',
                        borderRadius: 'inherit',
                    }}
                />
            </Box>
            <Box sx={{
                mx: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },

            }}>

                <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', } }} >
                    {props.name}
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px', },display:'flex', }} >
                    <Typography sx={{ fontSize: { xs: '10px', sm: '12px', md: '13px', lg: '14px', } }} >
                        up to
                    </Typography>
                    {props.discount}
                </Typography>


            </Box>
        </div>
    )
}

export default DailyCard
