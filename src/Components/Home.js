import React from 'react';
import { Link } from 'react-router-dom';
import Sliderimg from './assets/sliderimg.png';

const Home = ()=> {
    return(
        <>
        <section className="slider max-width">
                    <div className="textBox">
                        <h2>Its <span>AHCDC</span><br/>Career Counselling</h2>
                        <p>AHCDC (Australasian Human Capital Development Centre) focuses on to develop the skills and develop the common base of knowledge to their employee and clients. AHCDC consist of both face to face training session as well as online training session over a long span of time. </p>
                        <Link to="#">Learn More</Link>
                    </div>
                    <div className="imgBox">
                        <img src={Sliderimg} className="sliderimg"/>

                    </div>
                    
                </section>
                
                <section className="services-home">
                    <div className="blurb">
                        <div className="blurbimg">
                            <i className="fas fa-award fa-6x"></i>
                        </div>
                        <div className="blurbtext">
                            <i className="fas fa-award fa-6x"></i>
                            <h3>Career Coaching</h3>
                            <p>We provide best of the best quality career coaching for you to succeed in life.</p>
                        </div>
                    </div>
                    <div className="blurb">
                        <div className="blurbimg">
                            <i className="fas fa-wifi fa-6x"></i>
                        </div>
                        <div className="blurbtext">
                            <i className="fas fa-wifi fa-6x"></i>
                            <h3>Online Consultation</h3>
                            <p>Our services can be accessed remotely from your devices. This saves your time & money.</p>
                        </div>
                    </div>
                    <div className="blurb">
                        <div className="blurbimg">
                            <i className="fas fa-gamepad fa-6x"></i>
                        </div>
                        <div className="blurbtext">
                            <i className="fas fa-gamepad fa-6x"></i>
                            <h3>Career Games</h3>
                            <p>Our next gen games will help you find your best career path. Register and Start Playing.</p>
                        </div>
                    </div>
                    
                </section>
                <section className="newsletter max-width">
                    <div className="title-box">
                        <h2>Subscribe to our Newsletter</h2>
                    </div>
                    <form>
                    <div className="input-row">
                        <input type="text" name="fullname" placeholder="Full Name" class="fullname-class"/>
                    </div>
                    <div className="input-row">
                        <input type="text" name="email" placeholder="Your Email" class="email-class"/>
                        <input type="submit" class="submit-class" value="Submit"/>
                    </div>
                    </form>
                </section>
            </>
    )
}
export default Home;