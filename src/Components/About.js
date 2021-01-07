import React from 'react';
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
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {FaFacebook, FaTwitter} from 'react-icons/fa';


const About = ()=> {
    const toast = useToast();
    return(
        <>
        <Box maxWidth='1200px' m='auto' >
        <Text textAlign='center'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="bold"
                        mt= '40px'
                        >
                        What we do
                    </Text>
            <Text>Our professional career advisors provide a range of high-quality, personalised career counselling .We work with clients from all walks of life and at all career stages: from students and graduates through to C-suite executives conselling services to individuals and organisations across Australia and around the world.</Text>
            <Text mt='5px'>Our diverse expertise sees us working with clients across the public and private sectors and from all industries and backgrounds. we help young graduate to get expose in job market and through our expert we are helping hundred of people get best carrer advice .</Text>
        </Box>
        <Box d='flex' minHeight='60vh' alignItems='center'>
            <SimpleGrid  w='100%' columns={[1, null, 2]} className='max-width'>
                <Container overflow='hidden'>
                    <Box d='flex' alignItems='center' justifyContent='center'><RiCustomerService2Line color='#2ba1ff' size='200'/></Box>
                </Container>
                <Container overflow='hidden'>
                    
                    <Heading d='flex' alignItems='center' justifyContent='flex-start' fontSize='24px'>Expert consultants who care</Heading>
                    <Text>Our professional career advisors  are experts in their field and love what they do. They have extensive experience across a wide range of industries and occupations, they know the job market, and they understand what employers and recruiters are looking for (many having worked in HR or recruitment themselves).</Text>
                </Container>
                
            </SimpleGrid>
        </Box>
        <Box className='max-width' m='auto' minHeight='60vh' d='flex' alignItems='center' justifyContent='center' flexDir='column'>
        <Text textAlign='center'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="bold"
                        mt= '20px'
                        >
                        Contact Us
                    </Text>
                <FormControl id="first-name" isRequired w='60%' m='10px'>
                <Input placeholder="First name"/>
                </FormControl>
                <FormControl id="email" isRequired w='60%' m='10px'> 
                <Input type='email' placeholder="Email" />
                </FormControl>
                <FormControl id="Message" isRequired w='60%' m='10px'>
                <Input placeholder="Write here"/>
                </FormControl>
                
                <Button rightIcon={<MdArrowForward />} variant="outline" mt='15px' onClick={() =>
                    toast({
                    position: "bottom-left",
                    render: () => (
                        <Box color="white" p={3} bg="blue.500">
                        This service is Under Construction
                        </Box>
                    ),
                    })
                }>
                        Submit
                </Button>
        </Box>
        </>
    )
}
export default About;