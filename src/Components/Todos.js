import React, {useState,useContext,useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoService from '../Services/TodoService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';
import {Box, Input, Button, Heading, Text } from '@chakra-ui/react';
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import {MdArrowForward} from 'react-icons/md'

const Todos = props =>{
    const [todo,setTodo] = useState({name : ""});
    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    
    useEffect(()=>{
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        });
    },[]);

    const onSubmit = e =>{
        e.preventDefault();
        TodoService.postTodo(todo).then(data =>{
            const { message } = data;
            resetForm();
            if(!message.msgError){
                TodoService.getTodos().then(getData =>{
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username : "", role : ""});
                authContext.setIsAuthenticated(false);
            }
            else{
                setMessage(message);
            }
        });
    }

    const onChange = e =>{
        setTodo({name : e.target.value});
    }

    const resetForm = ()=>{
        setTodo({name : ""});
    }

    return(
        <div className='max-width'>
            <Box maxW="32rem" mt='10vh'>
                <Heading mb={4}>Save your Notes</Heading>
                <Text fontSize="xl">
                    Your Notes are always safe with us. Use this Service free of cost.
                </Text>
                
            </Box>
            <Box mt='20px' borderWidth="1px" borderRadius="lg" overflow="hidden" minHeight='100px' p='30px'>
            <List spacing={3}>
                {
                    todos.map(todo =>{
                        return <TodoItem key={todo._id} todo={todo}/>
                    })
                }
            </List>
            </Box>
            <br/>
            <form onSubmit={onSubmit}>
            <Input
            focusBorderColor="pink.400"
            placeholder="Enter Your Notes Here"
            value={todo.name} 
            onChange={onChange}
            />
            
            <Button rightIcon={<MdArrowForward />} variant="outline" type='submit' mt='20px' color=' #ff3579' borderColor=' #ff3579'>
             Save
            </Button>
            </form>
            <Box mt='30px'>
            {message ? <Message message={message}/> : null}
            </Box>
        </div>
    );

}

export default Todos;