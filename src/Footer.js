import React from 'react'
//import SocialMediaIcons  from "react-social-media-icons";
//import {Navbar} from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  
function Footer(props) {
 
        return(
            <div className=" container-fluid d-block bg-dark mt-3">
                  <p className="text-white text-center p-1">Follow us</p>
                  <div class="d-flex justify-content-center ">
                        <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook social p-2" >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        
                        <a href="https://www.twitter.com/jamesqquick" 
                            className="twitter social p-2">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/learnbuildteach"
                            className="instagram social p-2" >
                            <FontAwesomeIcon icon={faInstagram} size="2x" /> 
                        </a>

                  </div>
                    

                
               
                <p className="text-white text-center p-2">© Copyright 2019 Yoga.com </p>
            
            </div>
        
            
                
             )
    }






export default Footer