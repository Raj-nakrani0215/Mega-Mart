import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1E90FF', color: 'white', p: 4, mt: 4 }}>
            <Grid container spacing={4} sx={{ justifyContent: { xs: 'center', md: 'flex-start', }, textAlign: { xs: 'center', md: 'left' } }}>
                <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' }, ml: 'auto' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>MegaMart</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Contact Us</Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center', mt: 1 }}>
                        <WhatsAppIcon />
                        <Typography variant="body2" sx={{ ml: 1 }}>Whats App</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: { xs: 0, md: 4 } }}>+1 202-918-2132</Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center', mt: 1 }}>
                        <CallIcon />
                        <Typography variant="body2" sx={{ ml: 1 }}>Call Us</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ ml: { xs: 0, md: 4 } }}>+1 202-918-2132</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Download App</Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: 1 }}>
                        <AppleIcon sx={{ fontSize: 40, mr: 2 }} />
                        <AndroidIcon sx={{ fontSize: 40 }} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Most Popular Categories</Typography>
                    {['Staples', 'Beverages', 'Personal Care', 'Home Care', 'Baby Care', 'Vegetables & Fruits', 'Snacks & Foods', 'Dairy & Bakery'].map((category, index) => (
                        <Link key={index} href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none' }}>{category}</Link>
                    ))}
                </Grid>

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Customer Services</Typography>
                    {['About Us', 'Terms & Conditions', 'FAQ', 'Privacy Policy', 'E-waste Policy', 'Cancellation & Return Policy'].map((service, index) => (
                        <Link key={index} href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none' }}>{service}</Link>
                    ))}
                </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '2px solid rgba(255,255,255,0.3)' }}>
                <Typography variant="body2">
                    © 2022 All rights reserved. Reliance Retail Ltd.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
