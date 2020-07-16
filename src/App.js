import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home'

function App() {
    return (
        <Router>
            <Container fluid>
                <Menu/>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/scheduling'>
                        <div>scheduling placeholder</div>
                    </Route>
                    <Route path='/jenny'>
                        <div>about placeholder</div>
                    </Route>
                </Switch>  
            </Container>
        </Router>
    );
  }
  
  export default App;