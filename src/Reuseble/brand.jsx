import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import Iphone from '../Assets/Brands/Iphone.png'
import applelogo from '../Assets/Brands/applelogo.png'
const Brands = () => {
    return (
        <Card
            sx={{
                width: 350,
                height: 180,
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: 5,
                position: 'relative',
                overflow: 'visible',
                padding: 2,
                paddingBottom:0,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        
                        gap: 1,
                        marginBottom: 2
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#6D6D6D',
                            padding: '5px 20px',
                            borderRadius: 1
                        }}
                    >
                        <Typography variant="h6" >
                            IPHONE
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '20%',
                            padding: 1,
                            width: 30,
                            height: 30,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img src={applelogo} alt="Apple logo" style={{ width: '100%' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        UP TO 80% OFF
                    </Typography>
                </Box>

            </CardContent>
            <CardMedia
                component="img"
                image={Iphone}
                alt="iPhone"
                sx={{
                    width: 120,
                    height: 'auto',
                    position: 'absolute',
                    bottom: '-30px',
                    right: '16px',
                }}
            />
        </Card>
    );
}

export default Brands;
