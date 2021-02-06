import React, { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Button, Box, Input, Heading, Text,InputGroup, InputLeftAddon} from '@chakra-ui/react';
import {MdArrowForward} from 'react-icons/md'
import emailjs from 'emailjs-com';
import { Redirect } from 'react-router';


const Appointment = () => {
    const [userid, setUserid] = useState('');

    const getUserid = () => {
        fetch('/user/authenticated').then(
            (response) => response.json()).then((data)=> {
                console.log(data);
                setUserid(data.user.username)
            });
                
     
        
    }

    getUserid();
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_5ca2ldu', 'template_la3migw', e.target, 'user_Jre2kw1TB6hg15T0VLp6o')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          

      }

      


    return (
      <>
      <Box mt='10vh' className='max-width'>
                  <Heading mb={4}>Face to Face</Heading>
                  <Text fontSize="xl">
                      Fill up the form below and our team will reach out to you shortly.
                  </Text>
                  
              </Box>
      <Box className='max-width' borderWidth="1px" borderRadius="lg" overflow="hidden" p='20px' mt='5vh'>
      <Fragment>
        
        <form onSubmit={sendEmail}>
        <Box>
        <input name='username' value={userid} type='hidden'/>
        <Input variant="outline" name='fullName' placeholder="Full Name" />
        <Input variant="outline" name='email' placeholder="Email" mt='15px' />
        <InputGroup mt='15px'>
            <InputLeftAddon children="Date & Time" />
            <Input type='text' variant="outline" name='date' placeholder="dd/mm/yy 00:00"/>
        </InputGroup>
        
        <InputGroup mt='15px'>
            <InputLeftAddon children="+61" />
            <Input type="tel" name='phonenumber' placeholder="Phone number" />
        </InputGroup>
            
            
          
  
          
  
          <Button rightIcon={<MdArrowForward />} variant="outline" type='submit' mt='20px' color=' #ff3579' borderColor=' #ff3579'>
               Submit
          </Button>
          </Box>
        </form>
        
        
  
      </Fragment>
      </Box>
      </>
    );
  };
  
  export default Appointment;