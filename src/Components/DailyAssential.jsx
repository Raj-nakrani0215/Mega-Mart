import React from 'react'
import CustomeDevider from '../Reuseble/CustomDevider'
import { Box, Grid } from '@mui/material'
import DailyCard from '../Reuseble/DailyCard'
import G1 from "../Assets/DailyAssentials/cherry.png";
import G2 from "../Assets/DailyAssentials/groceries.png";
import G3 from "../Assets/DailyAssentials/grocery.png";
import G4 from "../Assets/DailyAssentials/mango.png";
import G5 from "../Assets/DailyAssentials/pngegg 1.png";
import G6 from "../Assets/DailyAssentials/strawberry.png";
import G7 from "../Assets/DailyAssentials/cherry.png";


function DailyAssential() {
  return (
    <>
      <CustomeDevider description={'Daily '} title={'Assential'} len={'10%'} remlen={'90%'} route={'/viewDailyAssential'}/>

      <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ maxHeight: '350px', width: '100%', mb: {xs:'30px',sm:'40px',md:'50px',},}}
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
                            <DailyCard image={G1} name={'Cherry'} discount={'30%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G2} name={'Vegtable'} discount={'33%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G3} name={'Grocery'} discount={'25%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G4} name={'Mango'} discount={'35%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G5} name={'Fruits'} discount={'45%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G6} name={'Stweberry'} discount={'40%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G7} name={'Cherry'} discount={'30%'}/>
                        </Grid>
                        <Grid item>
                            <DailyCard image={G3} name={'Grocery'} discount={'40%'}/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
    </>
  )
}

export default DailyAssential
