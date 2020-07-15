import React from 'react'
import { Grommet } from 'grommet'
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
        <NavBar>Agave Pilates</NavBar>
      </Grommet>
    );
  }
  
  export default App;