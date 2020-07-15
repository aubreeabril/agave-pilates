import React from 'react'
import { Box, Grid, Grommet } from 'grommet'
import NavBar from './Components/NavBar/NavBar'

const theme = {
    global: {
        colors: {
           brand: '#1d7490',
        },
        font: {
          family: 'Roboto',
          size: '18px',
          height: '20px',
        },
      },
}



function App() {
    return (
      <Grommet theme={theme}>
        <Grid
            rows={['flex', 'full']}
            columns={['medium', 'large']}
            gap="small"
            responsive={true}
            areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
          >
            <NavBar/>  
            <Box gridArea="nav" background="light-5" />
            <Box gridArea="main" background="light-2" />
        </Grid>
      </Grommet>
    );
  }
  
  export default App;