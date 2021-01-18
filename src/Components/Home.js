import React from 'react';
import { Link } from 'react-router-dom';
import Sliderimg from './assets/sliderimg.png';
import './stylesheets/style.css'
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
  } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {FaFacebook, FaTwitter} from 'react-icons/fa';


const Home = ()=> {
    const toast = useToast();
    return(
        <>
        <SimpleGrid w='100%' columns={[1, null, 2]} spacing="40px">
                    <Container  mt={[10, 20, 30, 40]} width="full">
                        
                    <Text
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="6xl"
                        fontWeight="extrabold"
                        >
                        Its AHCDC
                    </Text>

                        <Box mt='10px' fontSize='16px'>AHCDC (Australasian Human Capital Development Centre) focuses on to develop the skills and develop the common base of knowledge to their employee and clients. AHCDC consist of both face to face training session as well as online training session over a long span of time. </Box>
                        
                        <Box d='flex' justifyContent='flex-start' mt='20px'>
                        <Link to = './about'><Button rightIcon={<MdArrowForward />} variant="outline" mr='8px' color=' #ff3579' borderColor=' #ff3579'>Learn More</Button></Link>
                        <IconButton colorScheme="facebook" aria-label="Facebook" mr='8px'icon={<FaFacebook />}/>
                        <IconButton colorScheme="twitter" aria-label="Twitter" icon={<FaTwitter />} />
                        </Box>
                        
                    </Container>
                    <Box>
                        
                        <img src={Sliderimg} className="sliderimg"/>
                        

                    </Box>
                    
        </SimpleGrid>
                
        <Box d='flex' minHeight='50vh' alignItems='center' bg='#edf2f6'>
            <SimpleGrid  w='100%' columns={[1, null, 3]} className='max-width'>
                <Container overflow='hidden'>
                    <Box d='flex' alignItems='center' justifyContent='center'><BiGame size='100'/></Box>
                    <Heading d='flex' alignItems='center' justifyContent='center' fontSize='24px'>Career Games &nbsp;<Badge colorScheme="purple">New</Badge> </Heading>
                    <Text noOfLines={2} >Our next gen games will help you find your best career path. Register and Start Playing.</Text>
                </Container>
                <Container overflow='hidden'>
                    <Box d='flex' alignItems='center' justifyContent='center'><BiWorld size='100'/></Box>
                    <Heading d='flex' alignItems='center' justifyContent='center' fontSize='24px'>Online Consultation</Heading>
                    <Text noOfLines={2}>Our services can be accessed remotely from your devices. This saves your time & money.</Text>
                </Container>
                <Container overflow='hidden'>
                    <Box d='flex' alignItems='center' justifyContent='center'><RiCustomerService2Line size='100'/></Box>
                    <Heading d='flex' alignItems='center' justifyContent='center' fontSize='24px'>Career Coaching</Heading>
                    <Text noOfLines={2}>We provide best of the best quality career coaching for you to succeed in life.</Text>
                </Container>
            </SimpleGrid>
        </Box>
        <Box className='max-width' minHeight='60vh' d='flex' alignItems='center' justifyContent='center' flexDir='column'>
        <Text textAlign='center'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="4xl"
                        fontWeight="bold"
                        >
                        Subscribe to our Newsletter
                    </Text>
            
                <FormControl id="first-name" isRequired w='60%' m='10px'>
                <Input placeholder="First name"/>
                </FormControl>
                <FormControl id="email" isRequired w='60%' m='10px'> 
                <Input type='email' placeholder="Email" />
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
export default Home;