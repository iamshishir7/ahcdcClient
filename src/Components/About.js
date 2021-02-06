import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Container} from '@chakra-ui/react';
import {Box} from '@chakra-ui/react';
import {SimpleGrid} from '@chakra-ui/react';
import { Text } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { MdArrowForward } from 'react-icons/md';
import { BiGame } from 'react-icons/bi';
import { BiWorld } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react';
import { Textarea } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {FaFacebook, FaTwitter} from 'react-icons/fa';
import {MdSentimentVerySatisfied} from 'react-icons/md'
import emailjs from 'emailjs-com';

const About = ()=> {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_5ca2ldu', 'template_o8ieuvk', e.target, 'user_Jre2kw1TB6hg15T0VLp6o')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
   
    return(
        <>
        <Box className='max-width' h='20vh' d='flex' flexDirection='column' justifyContent='center' >
        <Text textAlign='left'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="4xl"
                        fontWeight="bold"
                        mt= '40px'
                        >
                        What we do
                    </Text>
            <Text>Our professional career advisors provide a range of high-quality, personalised career counselling .We work with clients from all walks of life and at all career stages: from students and graduates through to C-suite executives conselling services to individuals and organisations across Australia and around the world.</Text>
            <Text mt='5px'>Our diverse expertise sees us working with clients across the public and private sectors and from all industries and backgrounds. we help young graduate to get expose in job market and through our expert we are helping hundred of people get best carrer advice .</Text>
        </Box>
        <Box d='flex' minHeight='40vh' alignItems='center'>
            <SimpleGrid  w='100%' columns={[1, null, 2]} className='max-width'>
                <Container overflow='hidden'>
                    <Box d='flex' alignItems='center' justifyContent='center'><MdSentimentVerySatisfied color='#2ba1ff' size='200'/></Box>
                </Container>
                <Container overflow='hidden'>
                    
                    <Heading d='flex' alignItems='center' justifyContent='flex-start' fontSize='24px'>Expert consultants who care</Heading>
                    <Text>Our professional career advisors  are experts in their field and love what they do. They have extensive experience across a wide range of industries and occupations, they know the job market, and they understand what employers and recruiters are looking for (many having worked in HR or recruitment themselves).</Text>
                </Container>
                
            </SimpleGrid>
        </Box>
        <Box minHeight='70vh' d='flex'  bg='#edf2f6' >
        
                <form className='max-width' w='1300px' onSubmit={sendEmail}>
                <Text textAlign='center'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="4xl"
                        fontWeight="bold"
                        mt= '20px'
                        >
                        Contact Us
                    </Text>
                <FormControl id="full-name" isRequired w='700px' mt='10px'>
                <Input name='fullName' placeholder="Full Name"  bg='#fff'/>
                </FormControl>
                <FormControl id="Email" isRequired  mt='10px'>
                <Input name='email' type='email' placeholder="Your Email"  bg='#fff'/>
                </FormControl>
                <FormControl id="message" isRequired mt='10px'>
                <Textarea name='message' placeholder="Write here"  h='20vh' bg='#fff'/>
                </FormControl>
                <Box mt='15px' d='flex' justifyContent='flex-start' w='40%'>
                
                <Button rightIcon={<MdArrowForward />} variant="outline" mr='8px' color=' #ff3579' borderColor=' #ff3579' type='submit'>Submit</Button>
                <IconButton colorScheme="facebook" aria-label="Facebook" mr='8px'icon={<FaFacebook />}/>
                <IconButton colorScheme="twitter" aria-label="Twitter" icon={<FaTwitter />} />
                </Box>
                </form>
        </Box>
        </>
    )
}
export default About;