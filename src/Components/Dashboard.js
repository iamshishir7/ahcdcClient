import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Container} from '@chakra-ui/react';
import {Box} from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { MdArrowForward } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import {BiGame} from 'react-icons/bi'
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {FaFacebook, FaTwitter} from 'react-icons/fa';



const Dashboard = ()=> {
    return(
        <>
        <Box className='max-width' h='20vh' d='flex' flexDirection='column' justifyContent='center'>
        <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold">
            Our Services
        </Text>
            
        <Text> Choose what suits you the best and get started</Text>
       </Box>
       <Box className='max-width' bg='#edf2f6' borderRadius='10px'>
       <Grid templateColumns="repeat(3, 1fr)" gap={0} h='40vh' >
            <GridItem colSpan={2}>
                <Box d='flex' h='40vh' alignItems='center' p='20px' flexDir='column' alignItems='left' justifyContent='space-around'>
                    <Text fontSize="2xl" d='flex' fontWeight='bold' color='#2ba1ff'>Online Career Assessment</Text>
                    <Text fontSize="1xl" d='flex'>Through the career assessment, we will access your skills, strengths, interests, careers values, personality matches and the work environment which you prefer and guide you to the right career direction. The program allows you to evaluate the types of careers, fields and lifestyle that you’re interested in and provides you with the best feedback for a successful and satisfied life. This program model comprises two profiles:
                        Career Interest Profiler: The Career Interest Profiler helps you in figuring out your level of interest in various fields, occupations and activities in order to determine the career paths and the study field which you would most likely enjoy.</Text>
                        <Link to = './about'><Button rightIcon={<MdArrowForward />} variant="outline" mr='8px' color=' #ff3579' borderColor=' #ff3579'>Get Started</Button></Link>
                </Box>
            </GridItem>
            <GridItem w="100%" d='flex' justify-content='center' alignItems='center' pl='70px'><BiWorld size='150'/> </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={0} h='60vh' >
            <GridItem colSpan={2}>
                <Box d='flex' h='60vh' alignItems='center' p='20px' flexDir='column' alignItems='left' justifyContent='space-around'>
                    <Text fontSize="2xl" fontWeight='bold' color='#2ba1ff'>Career Consultation (Face-to-Face/ Skype/ Phone)</Text>
                    <Text fontSize="1xl">If you want to have a one-to-one session with the professionals in accessing your skills and strengths and if you need help to determine the career plans which are best suited for you, this session is highly recommended. Through this assessment you will:
                    
                        <List spacing={3} mt='15px' mb='15px'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Evaluate and discover the career based on your key competencies, interests, personality and values.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Explore different career options and identify the best career suited for you
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Acquire knowledge on how to conduct profound research in the field of you interest
                            </ListItem>
                            
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Get assistance in developing the action plans for the career paths
                            </ListItem>
                        </List>
                        
                        Once you’re done thorough the career consultation process, you’re provided with the reports and the action plans. Following the assessment, you are provided support throughout your career paths via phone calls or the emails. You can further book an appointment for any sort of decision-making, job searches, action plan evaluation, networking and interviewing skills.
                    </Text>
                    <Link to = './about'><Button rightIcon={<MdArrowForward />} variant="outline" mr='8px' color=' #ff3579' borderColor=' #ff3579'>Get Started</Button></Link>

                </Box>
            </GridItem>
            <GridItem w="100%" d='flex' justify-content='center' alignItems='center' pl='70px'><RiCustomerService2Line size='150'/> </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={0} h='30vh' >
            <GridItem colSpan={2} bg='#edf2f6'>
                <Box d='flex' h='30vh' alignItems='center' p='20px' flexDir='column' alignItems='left' justifyContent='space-around'>
                    <Text fontSize="2xl" d='flex' fontWeight='bold' color='#2ba1ff'>Card Game</Text>
                    <Text fontSize="1xl" d='flex'>The Card game is a fun user-friendly career card game allowing the users to answer the career related queries. The queries are associated with a certain point and the game is designed to evaluate those points which leads to a certain result.
                        </Text>
                        <Link to = './about'><Button rightIcon={<MdArrowForward />} variant="outline" mr='8px' color=' #ff3579' borderColor=' #ff3579'>Get Started</Button></Link>
                </Box>
            </GridItem>
            <GridItem w="100%" d='flex' justify-content='center' alignItems='center' pl='70px'><BiGame size='150'/> </GridItem>
        </Grid>
       </Box>
        </>
    )
    }
    

export default Dashboard;