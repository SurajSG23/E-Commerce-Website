import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const FooterPage = () => {
  return (
    <>
      <Footer>
          <div><h4>Shopy Zone &copy; 2024 | All Rights Reserved </h4></div>
          <div className='icons'>
            <a href="https://www.instagram.com/suraj_sg23/" target='_blank'><FaInstagram fontSize="30px" color='#c1ecf9'/></a>
            <a href="https://www.linkedin.com/in/suraj-s-g-dhanva-995a23298/" target='_blank'><FaLinkedin fontSize="30px" color='#c1ecf9'/></a>
            <a href="https://github.com/SurajSG23" target='_blank'><FaGithub fontSize="30px" color='#c1ecf9'/></a>
          </div>
        </Footer>
    </>
  )
}

export default FooterPage


const Footer = styled.div`
position: sticky;
width: 100%;
height: 70px;
top: 100%;
background-color: #175568;
display: flex;
justify-content: space-around;
align-items: center;
color: #c1ecf9;
top: 100vh;
h4{
  font-weight: 600;
  font-size: large;
}
.icons{
  display: flex;
  gap: 20px;
}
.icons a:hover{
    transform: scale(1.1);
}

`


