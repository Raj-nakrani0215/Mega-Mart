import React from 'react';
import CustomeDevider from '../Reuseble/CustomDevider';
import { Box, Grid } from '@mui/material';
import Cate from '../Reuseble/Category'
import cate1 from '../Assets/category/cate1.png';
import cate2 from '../Assets/category/cate2.png';
import cate3 from '../Assets/category/cate3.png';
import cate4 from '../Assets/category/cate4.png';
import cate5 from '../Assets/category/cate5.png';
import cate6 from '../Assets/category/cate6.png';
import cate7 from '../Assets/category/cate7.png';

function Category() {
    return (
        <>
            <CustomeDevider description={'Shop From '} title={'Top Category'} len={'30%'} remlen={'70%'} route={'/viewAllCategory'}/>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ maxHeight: '350px', width: '100%', mb: {xs:'20px',sm:'30px',md:'40px',} }}

            >
                <Box
                    sx={{
                        position: 'relative',
                        maxHeight: '350px',
                        width: '90%',
                        overflowX: 'auto',
                        scrollSnapType: "x mandatory",
                        '&::-webkit-scrollbar': {
                            display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
                        },
                        '-ms-overflow-style': 'none', // Hide scrollbar for Internet Explorer and Edge
                        scrollbarWidth: 'none', // Hide scrollbar for Firefox
                    }}
                >
                    <Grid container columns={10} direction="row" justifyContent="space-between" alignItems="center"  wrap="nowrap">
                        <Grid item py='10px'>
                            <Cate img={cate1}/>
                        </Grid>
                        <Grid item>
                            <Cate img={cate2}/>
                        </Grid>
                        <Grid item>
                            <Cate img={cate3}/>
                        </Grid>
                        <Grid item>
                            <Cate img={cate4}/>
                        </Grid>
                        <Grid item>
                            <Cate img={cate5}/>
                        </Grid>
                        <Grid item>
                            <Cate img={cate6}/>
                        </Grid>
                        <Grid item>
                            <Cate img={cate7}/>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Category
