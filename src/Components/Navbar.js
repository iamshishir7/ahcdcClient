import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import './stylesheets/style.css';

const Navbar = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
            <nav>
                <Link to="#">
                    Explore
                </Link>  
                <Link to="#">
                    Services 
                </Link>  
                <Link to="#">
                    About   
                </Link>
            </nav>
            <div>
                <Link to="/login" class='login-button'>Login</Link>
                <Link to="/register" class='register-button'>Register</Link>
            </div>
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>

                <Link to="/todos">
                    
                        Todos
                    
                </Link> 
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        
                            Admin
                        
                    </Link> : null
                }  
                
                <button type="button" 
                        className="btn-primary" 
                        onClick={onClickLogoutHandler}>Logout</button>
                
            </>
        )
    }
    return(
        <section class="head">
            
            
            <Link to="/" className="no-txtdeco">
            <div id="logo">
                <h1>AHCDC</h1>
            </div>
            </Link>
            
            
            
            
                { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
            
            
        </section>
    )
}

export default Navbar;