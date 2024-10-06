
import React from 'react'
import styled from 'styled-components'
const HeaderPageClothing = ({ setSelected, changeItems }) => {

  const handleChange = (event) => {
    changeItems(event.target.value);
  }
  return (
    <div> 
      <Header>
        <div> <a href=""><img src="https://raw.githubusercontent.com/SurajSG23/E-Commerce-Website/main/src/assets/logo.png" alt="logo" /></a></div>
        <div className='about'>
          <p onClick={() => { setSelected(0) }}>Home</p>
          <div className="search"><input type="text" placeholder='Search Here...' onChange={handleChange} /></div>
          <div className="choose">
            <select name="category" onChange={handleChange} >
            <option value="">ALL</option>
              <option value="CargoPant">CargoPant</option>
              <option value="Top">Top</option>
              <option value="Shorts">Shorts</option>
              <option value="Swimming">Swimming</option>
              <option value="Skirt">Skirt</option>
            </select>
          </div>
        </div>
      </Header>
    </div>
  )
}

export default HeaderPageClothing

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
.about p:hover{
  text-shadow: 1px 0.5px #154e5f;
}

.search input,.choose select{
  width: 200px;
  height: 30px;
  padding-left: 6px;
  border-radius: 10px;
  border: 1px solid #154e5f;
}

@media (max-width:675px){
  display: flex;
  flex-direction: column;
}
@media (max-width:455px){
  .about{
    display: flex;
    flex-direction: column;
  }
}
`
