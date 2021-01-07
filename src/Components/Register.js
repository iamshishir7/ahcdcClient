import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { Text } from '@chakra-ui/react';


const Register = props=>{
    const [user,setUser] = useState({fullname: "", email: "", username: "", password : ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetForm = ()=>{
        setUser({fullname: "", email: "", username: "", password : ""});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                },2000)
            }
        });
    }



    return(
        <div className='register-container'>
            <Text textAlign='center'
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="bold"
                        >
                        Lets get you Signed Up
                    </Text>
                    <Text textAlign='center'>Fill out the form to be in our family</Text>

            <div className="top-wrap">
                 <a href="./"> <i class="fas fa-chevron-left"></i> &nbsp; go back</a>
            </div>
            <form onSubmit={onSubmit} className='buttom-wrap'>
                <input type="text" 
                       name="fullname" 
                       value={user.fullname}
                       onChange={onChange} 
                       placeholder="Full Name"/>

                <input type="text" 
                       name="email" 
                       value={user.email}
                       onChange={onChange} 
                       placeholder="Email"/>

                <input type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       placeholder="Username"/>
                
                
                <input type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange}
                       placeholder="Password"/>
                
                
                <button type="submit">Register</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Register;