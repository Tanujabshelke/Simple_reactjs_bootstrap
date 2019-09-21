import React from 'react';
import {Navbar} from 'react-bootstrap';
function Header(){
    return(
        <div className="tcolor">
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="./img/logo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    
                    {  ' Stay fit & calm with Yoga' }
                
               
                </Navbar.Brand>
            </Navbar>
        </div>
            
            
        
    )
}

export default Header