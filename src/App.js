import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import About  from './Components/About';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <UnPrivateRoute path="/login" component={Login}/>
        <UnPrivateRoute path="/register" component={Register}/>
        <UnPrivateRoute path="/about" component={About}/>
        <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
