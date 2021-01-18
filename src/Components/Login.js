import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import {AuthContext} from '../Context/AuthContext';
import { Text } from '@chakra-ui/react';

const Login = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/dashboard');
            }
            else
                setMessage(message);
        });
    }



    return(
        <div className="register-container">
            <Text textAlign='center'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="bold"
                        >
                        Your Dashboard Awaits you
                    </Text>
                    <Text textAlign='center'>We will be there in no time</Text>

                    <div className="top-wrap">
                    <a href="./"><i className="fas fa-chevron-left"></i> &nbsp; go back</a>
                    </div>
                    
                        <form onSubmit={onSubmit} className='buttom-wrap-login'>
                            
                            <input type="text" 
                                name="username" 
                                onChange={onChange} 
                                placeholder="Username"/>
                            
                            <input type="password" 
                                name="password" 
                                onChange={onChange} 
                                placeholder="Password"/>
                            <button type="submit">Log in</button>
                        </form>
                    
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Login;