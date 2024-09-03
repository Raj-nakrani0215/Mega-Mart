import React from 'react';
import CustomeDevider from '../Reuseble/CustomDevider';
import { Box, Grid } from '@mui/material';
import Card from '../Reuseble/Card';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';

function Phones() {
    const Mobile1 = {name:'Galaxy S22', price:'74999', offerPrice:'32999', Discount:'50%', img: image1};
    const Mobile2 = {name:'Galaxy M13', price:'44999', offerPrice:'30999', Discount:'30%', img: image2};
    const Mobile3 = {name:'Galaxy M33', price:'24999', offerPrice:'16999', Discount:'56%', img: image3};
    const Mobile4 = {name:'Galaxy S22', price:'31999', offerPrice:'17999', Discount:'46%', img: image4};
    const Mobile5 = {name:'Galaxy S22', price:'85000', offerPrice:'67999', Discount:'25%', img: image5};

    return (
        <>
            <CustomeDevider description={'Grab the best deal on '} title={'SmartPhones'} len={'35%'} remlen={'65%'} route={'/viewAllPhone'}/>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ maxHeight: '350px', width: '100%', mb: {xs:'30px',sm:'40px',md:'50px',}, }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        maxHeight: '350px',
                        width: '90%',
                        scrollSnapType: "x mandatory",
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': {
                            display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
                        },
                        '-ms-overflow-style': 'none', // Hide scrollbar for Internet Explorer and Edge
                        scrollbarWidth: 'none', // Hide scrollbar for Firefox
                    }}
                >
                    <Grid container columns={10} direction="row" justifyContent="space-between" alignItems="center"   wrap="nowrap">
                        <Grid item>
                            <Card Mobile={Mobile1}/>
                        </Grid>
                        <Grid item>
                            <Card Mobile={Mobile2}/>
                        </Grid>
                        <Grid item>
                            <Card Mobile={Mobile3}/>
                        </Grid>
                        <Grid item>
                            <Card Mobile={Mobile4}/>
                        </Grid>
                        <Grid item>
                            <Card Mobile={Mobile5}/>
                        </Grid>
                        <Grid item>
                            <Card Mobile={Mobile1}/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Phones;
