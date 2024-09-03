import { Badge, Box, Button, Divider, Drawer, Grid, IconButton, InputAdornment, Menu, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SubjectIcon from '@mui/icons-material/Subject';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box role="presentation" onClick={toggleDrawer(false)} sx={{display:"flex",flexDirection:'column',alignItems:'center'}}>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit', padding: '20px' }}>
                <Typography variant="h5">Home</Typography>
                </Link> 

                <Link to='/About' style={{ textDecoration: 'none', color: 'inherit', padding: '20px' }}>
                <Typography variant="h5">About</Typography>
                </Link>

                <Link to='/Cart' style={{ textDecoration: 'none', color: 'inherit', padding: '20px' }}>
                <Typography variant="h5">Cart</Typography>
                </Link>

                <Link to='/Login' style={{ textDecoration: 'none', color: 'inherit', padding: '20px' }}>
                <Typography variant="h5">Login</Typography>
                </Link>

                <Link to='/Contact' style={{ textDecoration: 'none', color: 'inherit', padding: '20px' }}>
                <Typography variant="h5">Contact us</Typography>
                </Link>
            
        </Box>
    );

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log("Mouse leave");

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log("Mouse leave");

        setAnchorEl(null);
    };


    return (
        <Grid
            container
            spacing={2}
            sx={{ py: '10px', px: { xs: '20px', sm: '30px', md: '50px' }, color: '#008ECC', fontFamily: 'Volkhov', alignItems: 'center' }}
        >
            <Grid
                item
                xs={5}
                md={3}
                sx={{ display: 'flex', alignItems: 'center' }}
            >

                <Button onClick={toggleDrawer(true)}><SubjectIcon /></Button>
                <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            alignSelf: 'center',
                            mx: { xs: 2, md: 3, xl: 'auto' },
                            my: { xs: 2, md: 3, xl: '4' },
                            maxWidth: '1400px',
                            
                        },
                    }} >
                    {DrawerList}
                </Drawer>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit', padding: '0px' }}>
                    <Typography variant='h6' ml={{ xs: 0, md: 2 }}>MegaMart</Typography>
                </Link>

            </Grid>

            <Grid item xs={12} md={4} lg={5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} >
                <TextField variant="outlined" placeholder="Search" size="small" fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none',
                            },
                            color: '#008ECC',
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ color: '#008ECC' }}>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>

            <Grid item xs={4} md={1} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                <ListIcon />
            </Grid>

            <Grid item xs={3} md={4} lg={3} sx={{ display: 'flex', justifyContent: { xs: 'flex-end', md: 'flex-start' }, alignItems: 'center' }} >


                <IconButton
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                    color='inherit'
                >
                    <PersonOutlineIcon />
                    <Typography variant="subtitle2" sx={{ display: { xs: 'none', md: 'inline' }, ml: 1 }}>
                        Sign In
                    </Typography>
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    py={2}
                >
                    <MenuItem onClick={handleClose}>New Customer? </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Login </MenuItem>
                </Menu>


                <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: '#008ECC', display: { xs: 'none', md: 'inline-block' } }} />

                <Link to='/Cart' style={{ textDecoration: 'none', color: 'inherit', padding: '0px' }}>
                    <IconButton sx={{ color: '#008ECC' }}>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#008ECC', display: { xs: 'none', md: 'inline' }, ml: 1 }}>
                        Cart
                    </Typography>
                </Link>
            </Grid>

        </Grid>
    )
}

export default Navbar;
