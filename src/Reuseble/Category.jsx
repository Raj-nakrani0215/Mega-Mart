import React from 'react'

import { Box } from '@mui/material';

function Cate(props) {
    return (
        <div>
            <Box
                sx={{
                    width: {xs:'85px',sm:'110px',md:'120px',lg:'130px',},
                    height: {xs:'85px',sm:'110px',md:'120px',lg:'130px',},
                    borderRadius: '50%',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    mx: {xs:'5px',sm:'13px',md:'15px',},
                    
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden', // Ensure the image doesn't overflow outside the box
                    scrollSnapAlign: "center",
                    '&:hover': {
                    borderColor: 'blue',
                    boxShadow: '0px 0px 14px 0px rgba(176,169,176,1)',
                },
                }}
            >
                <img
                    src={props.img}
                    alt=""
                    style={{
                        width: '80%',
                        height: '80%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

        </div>
    )
}

export default Cate;
