import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight:"1rem"}}/>
                    <div>
                        <p>204,Hirabag society.</p>
                        <p>Ahmedabad,Gujarat,India.</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight:"1rem"}}/>
                +91 9313597798</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:"1rem"}}/>
                prajapatidinesh313@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Dinesh Prjapati.Full Stack Developer || MERN Stack || CSE'25 || JAVA || DSA || GFG || Python || C </p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}
                    />
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}
                    />
                    <FaTwitter   size={30} style={{color:"#fff", marginRight:"1rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer