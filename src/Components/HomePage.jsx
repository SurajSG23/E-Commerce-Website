import React from 'react'
import styled from 'styled-components'
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

const HomePage = ({ setSelected }) => {
  return (
    <MainContainer>
      < HeaderPage />
      <Body>
        <div className="headLines">
          <h2>Select A Category</h2>
        </div>
        <div className="cardContainer">
          <div className="card" onClick={() => { setSelected(1) }}>
            <h3>ELECTRONICS</h3>
            <hr />
            <img src="/assets/electronics.png" alt="" />
            <button>SHOP NOW</button>
          </div>
          <div className="card" onClick={() => { setSelected(2) }}>
            <h3>CLOTHING</h3>
            <hr />
            <img src="./src/assets/clothing.png" alt="" />
            <button>SHOP NOW</button>
          </div>
          <div className="card" onClick={() => { setSelected(3) }}>
            <h3>ACCESSORIES</h3>
            <hr />
            <img src="./src/assets/accessories.png" alt="" />
            <button>SHOP NOW</button>
          </div>
        </div>
      </Body>
      <FooterPage />
    </MainContainer>
  )
}

export default HomePage

const Body = styled.div`
max-width: 70vw;
margin: -6px auto;
height:auto;
display: flex;
flex-direction: column;
gap: 30px;

.headLines{
  text-align: center;
}

.cardContainer{
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  margin: 0 auto;
}

.card{
  position: relative;
  width: 300px;
  height: 400px;
  border: 1px solid black;
  background-color: rgba(21, 78, 95,0.3);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  box-shadow: 2px 2px 10px white;
}
.card button{
    position: absolute;
    width :200px ;
    height: auto;
    padding: 10px 0 10px 0;
    bottom: 10px;
    background-color: #11404f;
    font-size: large;
    font-weight: 500;
    color: white;
    left: 15%;
    border-radius: 10px;
    cursor: pointer;
}

.card:hover{
  cursor: pointer;
  transform: scale(1.03);
  box-shadow: 10px 10px 10px #154e5f;
}


.card h3{
  text-align: center;
  margin-top: 20px;
}

.cardContainer .card:nth-child(1) img{
   width: 300px;
   margin: 30px auto;
}
.cardContainer .card:nth-child(2) img{
   width: 297px;
   margin: 50px auto;
   display: flex;
   flex-direction: column;
}

.cardContainer .card:nth-child(3) img{
   width: 340px;
   margin: 40px auto;
}
`
const MainContainer = styled.div`
background-image: linear-gradient( white 30%,#154e5f)  ;
width: 100vw;
height: 100vh;


@media (max-width:1374px){
  background-image: linear-gradient( white 30%,#154e5f)  ;
  width: 100vw;
  height: 150vh;

}
@media (max-width:874px){
  background-image: linear-gradient( white 30%,#154e5f)  ;
  width: 100vw;
  height: 250vh;
  .cardContainer{
    padding-left: 20vw;
  }
}
@media (max-width:514px){
  background-image: linear-gradient( white 30%,#154e5f)  ;
  width: 110vw;
  height: 250vh;
  .cardContainer{
    padding-left: 0vw;
  }
}
@media (max-width:412px){
  background-image: linear-gradient( white 30%,#154e5f)  ;
  width: 100vw;
  height: 200vh;
  .cardContainer{
    padding-left: 0vw;
  }
}


`
