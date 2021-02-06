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
                <li>
                <Link to="/" className="no-txtdeco">
                    Home
                </Link>
                </li>  
                <li>
                <Link to="./services" className="no-txtdeco">
                    Services
                </Link>
                </li> 
                <li>
                <Link to="/about" className="no-txtdeco">
                    About
                </Link>
                </li>
            
                <li>
                <div className='nav-buttons'>
                <Link to="/login"><button className="loginlogout-button">Login</button></Link>
                
                <Link to="/register"><button className="register-button">Create Account</button></Link>
                </div>
                </li>
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
            
            <li>
                <Link to="./" className="no-txtdeco">
                    Home
                </Link>
                </li> 
                
                <li>
                <Link to="./dashboard" className="no-txtdeco">
                    Dashboard
                </Link>
                </li> 
                
                
                {
                    user.role === "admin" ? 
                    <li>
                    <Link to="/admin" className='no-txtdeco'>
                        
                            Admin
                        
                    </Link>
                    </li> : null
                }
                
                <li>
                <button type="button" 
                        className="loginlogout-button" 
                        onClick={onClickLogoutHandler}>Logout</button>
                </li>
                
            </>
        )
    }
    return(
        <nav className="navbar">
            <div className="max-width">
            
            <Link to="/" className="no-txtdeco">
            <div className="logo">
                <h1>AHCDC</h1>
            </div>
            </Link>
            <ul className="menu">
            
            
            
                { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;