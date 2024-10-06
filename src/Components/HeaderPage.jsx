import React from 'react'
import styled from 'styled-components'
const HeaderPage = () => {
  return (
    <div>
      <Header>
        <div> <a href=""><img src="https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/logo.png" alt="logo" /></a></div>
        <div className='about'>
          <p href="">Home</p>
        </div>
      </Header>
    </div>
  )
}

export default HeaderPage

const Header = styled.div`
max-width: 100%;
height: auto;
border: 1px solid #154e5f;
display: flex;
align-items: center;
justify-content: space-around;

img{
  width:245px ;
  background-repeat: no-repeat;
  background-size: contain;
}

.about{
  display: flex;
  gap: 20px;
}
.about p{
  all: unset;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
}
.about p{
  text-decoration: underline;
}
.about p:hover{
  text-shadow: 1px 0.5px #154e5f;
}
`
