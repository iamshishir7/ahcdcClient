import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todos';
import FileUpload from './Components/CareerAssesment/FileUpload';
import Chat from './Components/OnlineChat/chat';
import Dashboard  from './Components/Dashboard';
import CareerGameIndex from './Components/CareerGame/gameindex';
import CareerGame from './Components/CareerGame/careergame';
import Appointment  from './Components/appointment';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import About  from './Components/About';
import Services  from './Components/services';
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
        <UnPrivateRoute path="/services" component={Services}/>
        <UnPrivateRoute path="/onlinechat" component={Chat}/>
        <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
        <PrivateRoute path="/careergame" roles={["user","admin"]} component={CareerGameIndex}/>
        <PrivateRoute path="/startgame" roles={["user","admin"]} component={CareerGame}/>
        <PrivateRoute path="/appointment" roles={["user","admin"]} component={Appointment}/>
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
        <PrivateRoute path="/dashboard" roles={["user","admin"]} component={Dashboard}/>
        <PrivateRoute path="/CareerAssessment" roles={["user","admin"]} component={FileUpload}/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
