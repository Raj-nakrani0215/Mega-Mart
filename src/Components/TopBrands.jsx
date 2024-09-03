import React from 'react'
import CustomeDevider from '../Reuseble/CustomDevider'
import { Box, Grid } from '@mui/material'
import Brands from '../Reuseble/brand'

function TopBrands() {
  return (
    <>
      <CustomeDevider description={'Top '} title={'Electronics Brands'} len={'30%'} remlen={'70%'} route={'/viewAllBrands'} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ maxHeight: '400px', width: '100%', mb: { xs: '20px', sm: '30px', md: '40px', } }}

      >
        <Box
          sx={{
            position: 'relative',
            
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
 <Grid container columns={10} direction="row" justifyContent="space-between" alignItems="center"  wrap="nowrap" >
                        <Grid item py='10px' pr={2}>
                            <Brands/>
                        </Grid>
                        <Grid item py='10px' pr={2}>
                            <Brands/>
                        </Grid>
                        <Grid item py='10px' pr={2}>
                            <Brands/>
                        </Grid>
                        
                    </Grid>

        </Box>
      </Box>

    </>
  )
}

export default TopBrands
