import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CustomeDevider(Props) {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: 'auto',
                    width: '100%',
                    overflow: 'hidden',
                    mb: '10px',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        height: 'auto',
                        width: '90%',
                        overflow: 'hidden'
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"

                    >
                        <Grid item sx={{ display: 'flex' }}>
                            <Typography
                                variant='h6'
                                sx={{
                                    fontSize: { xs: '0.8rem', sm: '1.25rem', md: '1.5rem' },// Responsive font size
                                }}
                            >
                                {Props.description}
                            </Typography>
                            <Typography
                                variant='h6'
                                color='#008ECC'
                                sx={{
                                    fontSize: { xs: '0.8rem', sm: '1.25rem', md: '1.5rem' } // Responsive font size
                                }}
                            >
                                {Props.title}
                            </Typography>
                        </Grid>
                        <Grid item color='#008ECC'>
                            <Button
                                variant="text"
                                sx={{
                                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } // Responsive font size
                                }}
                            >
                                <Link
                                    to={Props.route}
                                    style={{ textDecoration: 'none', color: 'inherit', }}
                                >
                                    View More
                                </Link>
                            </Button>
                        </Grid>

                    </Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                width: `${Props.len}`,
                                height: { xs: '1px', sm: '1.5px', md: '2px' }, 
                                backgroundColor: '#008ECC',
                            }}
                        />
                        <Box
                            sx={{
                                width: `${Props.remlen}`,
                                height: { xs: '0.5px', sm: '1px', md: '1.5px' }, 
                                backgroundColor: 'lightGray',
                            }}
                        />

                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default CustomeDevider
