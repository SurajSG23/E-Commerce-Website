import React, { useState } from 'react'
import HeaderPageElectronics from './HeaderPageElectronics'
import styled from 'styled-components'
import FooterPage from './FooterPage'
import CardsItem from './CardsItem'

const Electronics = ({ setSelected }) => {

  const items = [
    {
      name: "HP victus",
      price: "55,000.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Electronics/laptop.png",
      type: "laptop"
    },
    {
      name: "IQOO NEO 6",
      price: "24,999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Electronics/phone.png",
      type: "phone"
    },
    {
      name: "boAt Immortal 121",
      price: "999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Electronics/earphone.png",
      type: "earbuds"
    },
    {
      name: "Honor Tab X8",
      price: "8,999.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Electronics/tab.png",
      type: "tab"
    },
    {
      name: "Fire-Boltt Ring 3 ",
      price: "2,600.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Electronics/watch.png",
      type: "watch"
    },
    {
      name: "Zeb Transformer",
      price: "2,399.00",
      img: "https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/Electronics/keyboard.png",
      type: "keyboard"
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
      <HeaderPageElectronics setSelected={setSelected} changeItems={changeItems} />
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

export default Electronics

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
