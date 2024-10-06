import React, { useState } from 'react'
import styled from 'styled-components'
import FooterPage from './FooterPage'
import CardsItem from './CardsItem'
import HeaderPageClothing from './HeaderPageClothing'

const Accessories = ({ setSelected }) => {

  const items = [
    {
      name: "Cargo Pant",
      price: "799.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Clothings/cargopant.png",
      type: "cargopant"
    },
    {
      name: "Swimming Dress",
      price: "999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Clothings/swimming.png",
      type: "swimming"
    },
    {
      name: "Girls Top",
      price: "999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Clothings/top.png",
      type: "top"
    },
    {
      name: "Boys Top",
      price: "840.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Clothings/oversizedshirt.png",
      type: "top"
    },
    {
      name: "Skirt",
      price: "1,299.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Clothings/skirt.png",
      type: "skirt"
    },
    {
      name: "Men Shorts",
      price: "999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Clothings//shorts.png",
      type: "shorts"
    }
  ];
  const [filteredItems, setFilteredItems] = useState(items);

  const changeItems = (e) => {
    const filter = items.filter((item) =>
      item.name.toLowerCase().includes(e.toLowerCase()) ||
      item.type.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredItems(filter);
  }


  return (
    <MainContainer>
      <HeaderPageClothing setSelected={setSelected} changeItems={changeItems} />
      <Body>
        {
          filteredItems.map((item, index) => {
            return < CardsItem key={index} items={item} />
          })
        }
      </Body>
      <FooterPage />
    </MainContainer>
  )
}

export default Accessories 

const MainContainer = styled.div`
background-image: linear-gradient( white 30%,#154e5f)  ;
width: 100vw;
height: 100vh;

@media (max-width:1200px){
  background-image: linear-gradient( white 30%,#154e5f)  ;
  width: 100vw;
  height: 130vh;

}

@media (max-width:790px){
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
  height: 250vh;
}


`

const Body = styled.div`
  width: 60vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto;
  justify-content: center;
  margin-top:25px;
`
const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  
`
