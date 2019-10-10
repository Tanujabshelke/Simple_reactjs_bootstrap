import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  
function Footer(props) {
 
        return(
            // eslint-disable-next-line react/style-prop-object
            <div className=" container-fluid d-block  mt-3" style={{background : "linear-gradient(to right, #660033, #ff1a8c" }}>
                  <p className="text-white text-center p-1">Follow us</p>
                  <div class="d-flex justify-content-center  ">
                        <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook social p-2  " >
                            <FontAwesomeIcon icon={faFacebook} color="grey" size="2x" />
                        </a>
                        
                        <a href="https://www.twitter.com/jamesqquick" 
                            className="twitter social p-2">
                            <FontAwesomeIcon icon={faTwitter} color="grey" size="2x" />
                        </a>
                        <a href="https://www.instagram.com/learnbuildteach"
                            className="instagram social p-2" >
                            <FontAwesomeIcon icon={faInstagram} color="grey" size="2x" /> 
                        </a>

                  </div>
                    

                
               
                <p className="text-white text-center p-2">© Copyright 2019 Meme.com </p>
            
            </div>
        
            
                
             )
    }






export default Footer
