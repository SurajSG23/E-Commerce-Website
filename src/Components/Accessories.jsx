import React, { useState } from 'react'
import styled from 'styled-components'
import FooterPage from './FooterPage'
import CardsItem from './CardsItem'
import HeaderPageAccessories from './HeaderPageAccessories'

const Accessories = ({ setSelected }) => {

  const items = [
    {
      name: "Bracelet",
      price: "299.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Accessories/bracelet.png",
      type: "barcelet"
    },
    {
      name: "louis vuitton Purse",
      price: "19,999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Accessories/purse.png",
      type: "purse"
    },
    {
      name: "IQOO Phone Case",
      price: "999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Accessories/phonecase.png",
      type: "phonecase"
    },
    {
      name: "C-Type Charger",
      price: "840.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Accessories/charger.png",
      type: "charger"
    },
    {
      name: "RayBan Sunglass",
      price: "2,100.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Accessories/sunglasses.png",
      type: "sunglasses"
    },
    {
      name: "Tie",
      price: "2,399.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Accessories/tie.png",
      type: "tie"
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
      <HeaderPageAccessories setSelected={setSelected} changeItems={changeItems} />
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
