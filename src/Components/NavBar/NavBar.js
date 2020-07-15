import React from 'react'
import { Box } from 'grommet'


const NavBar = (props) => (
    <Box 
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        elevation='small'
        style={{ zIndex: '1' }}
        height='small'
        alignContent='center'
        gridArea='header'
        {...props}>
        Agave Pilates
    </Box>
)

export default NavBar