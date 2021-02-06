import React, {useState, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Container, DarkMode} from '@chakra-ui/react';
import {Box} from '@chakra-ui/react';
import { SimpleGrid} from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import { MdArrowForward } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import {BiGame} from 'react-icons/bi'
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {FaFacebook, FaTwitter} from 'react-icons/fa';
import {Redirect} from 'react-router-dom';



const Dashboard = ()=> {
    

    const [name, setName] = useState('');

    const getName = () => {
        fetch('/user/authenticated').then(
            (response) => response.json()).then((data)=> {
                console.log(data);
                setName(data.user.username)
            });
                
     
        
    }

    getName();    
    const OnlineChat = {
        badgeContent: "New",
        title: "Online Chat",
        desc : "Chat with our experts to seek best career adivce for you."
      }

      const careerAssesment = {
        badgeContent: "Legacy",
        title: "Career Assesment",
        desc : "Upload your CV and we will assess your background thoughtfully to guide you in the right direction."
      }

      const facetoface = {
        badgeContent: "Legacy",
        title: "Face to Face",
        desc : "Book a meeting with our advisor and have a chat over a good morning coffee."
      }

      const cardGame = {
        badgeContent: "Legendary",
        title: "Career Game",
        desc : "Play our exclusive games to choose your career path. Get started for free."
      }

      const Todo = {
        badgeContent: "Extra",
        title: "Save Your Notes",
        desc : "Store your personal notes on our website. Completely free for our registered Users."
      }

      const commingSoon = {
        badgeContent: "TBD",
        title: "TBD",
        desc : "TBD"
      }

    return(
        <>
        <Box className='max-width' h='90vh' d='flex' flexDirection='column' justifyContent='center'>
        <Text textAlign='left' pb='10px'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="bold"
                        >
                        Hey {name},
                    </Text>
                    
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
                <Link to='/'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height='200px'>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                             {OnlineChat.badgeContent}
                            </Badge>
                            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                            Recommended
                            </Box>
                            
                        </Box>
                        <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h2"
                                lineHeight="tight"
                                isTruncated fontSize='3xl'
                                >
                                {OnlineChat.title}
                        </Box>
                        <Text>{OnlineChat.desc}</Text>
                    </Box>
                </Box>
                </Link>
                <Link to='/CareerAssessment'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height='200px'>
                <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                             {careerAssesment.badgeContent}
                            </Badge>
                            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                            Recommended
                            </Box>
                            
                        </Box>
                        <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h2"
                                lineHeight="tight"
                                isTruncated fontSize='3xl'
                                >
                                {careerAssesment.title}
                        </Box>
                        <Text>{careerAssesment.desc}</Text>
                    </Box>
                </Box>
                </Link>
                <Link to ='/appointment'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height='200px'>
                <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                             {facetoface.badgeContent}
                            </Badge>
                            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                            Recommended
                            </Box>
                            
                        </Box>
                        <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h2"
                                lineHeight="tight"
                                isTruncated fontSize='3xl'
                                >
                                {facetoface.title}
                        </Box>
                        <Text>{facetoface.desc}</Text>
                    </Box>
                </Box>
                </Link>
                <Link to ='/careergame'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height='200px'>
                <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                             {cardGame.badgeContent}
                            </Badge>
                            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                            Recommended
                            </Box>
                            
                        </Box>
                        <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h2"
                                lineHeight="tight"
                                isTruncated fontSize='3xl'
                                >
                                {cardGame.title}
                        </Box>
                        <Text>{cardGame.desc}</Text>
                    </Box>
                </Box>
                </Link>
                <Link to='/todos'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height='200px'>
                <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                             {Todo.badgeContent}
                            </Badge>
                            
                            
                        </Box>
                        <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h2"
                                lineHeight="tight"
                                isTruncated fontSize='3xl'
                                >
                                {Todo.title}
                        </Box>
                        <Text>{Todo.desc}</Text>
                    </Box>
                </Box>
                </Link>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height='200px'>
                <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                             {commingSoon.badgeContent}
                            </Badge>
                            
                            
                        </Box>
                        <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h2"
                                lineHeight="tight"
                                isTruncated fontSize='3xl'
                                >
                                {commingSoon.title}
                        </Box>
                        <Text>{commingSoon.desc}</Text>
                    </Box>
                </Box>
                
            </SimpleGrid>
       </Box>
       
        </>
    )
    }
    

export default Dashboard;