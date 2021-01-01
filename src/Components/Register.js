import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';

const Register = props=>{
    const [user,setUser] = useState({username: "", password : "", role : ""});
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
        setUser({username : "", password : "",role : ""});
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
            <h1>Lets get you Signed Up!</h1>
            <p>Fill out the form to be in our family</p>
            <div className="top-wrap">
                 <a href="./"> <i class="fas fa-chevron-left"></i> &nbsp; go back</a>
            </div>
            <form onSubmit={onSubmit} className='buttom-wrap'>
                
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
                <label htmlFor="role" className="sr-only">Role: </label>
                <input type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange}
                       placeholder="Enter role (admin/user)"/>
                <button type="submit">Register</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Register;