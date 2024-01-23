import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Resume from './MyResume3.1.pdf'

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
                    <a href="https://www.linkedin.com/in/dinesh-prajapati-8899ba22a/">
                    <FaLinkedin  size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a href="https://github.com/dinesh0313"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a href="https://www.instagram.com/dinesh_prajapati_313/"><FaInstagram   size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a href="https://twitter.com/DineshD71027"><FaTwitter   size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100043913285348"><FaFacebook   size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    {/* <a href="./MyResume3.1.pdf" download=
                    "_blank" className="btn1">Download Resume</a> */}
                    {/* <a href="./MyResume3.1.pdf" download="_blank" className="btn1">Download Resume</a> */}
                    {/* <a href="./MyResume3.1.pdf" >
                    <button className="btn1">Download CV</button></a> */}
                    <a href={Resume} download='resume' target="_blank"><button className="btn1">Download Resume</button></a>
                </div>
            </div>
        </div>
        <div className="footer-last">
            <p>Made with 🔥 by Dinesh Prajapati</p>
        </div>
    </div>
  )
}

export default Footer