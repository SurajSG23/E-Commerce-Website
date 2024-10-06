import styled from 'styled-components'
const CardsItem = ({items}) => {

    return (
        <CardContainer>
            <Cards>
                <h4>{items.name}</h4>
                <hr />
                <p>&#8377;{items.price}</p>
                <img src={items.img} alt={items.name} />
                <button>Buy Now</button>
            </Cards>
        </CardContainer>
    )
}

export default CardsItem

const CardContainer = styled.div`
   position: relative;

`

const Cards = styled.div`
    width: 220px;
    height: 250px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    backdrop-filter: blur(50px);
    box-shadow: 1px 1px 4px white;
    transition: all 0.2s ease-in-out;
    background-color: rgba(21, 78, 95,0.5);
    h4{
        text-align: center;
        padding: 5px 0px 5px 0px;
    }
    img{
        width: 150px;
        background-repeat: no-repeat;
        background-size: contain;
        margin: 12px auto;
        display: flex;
        aspect-ratio: 1/1;
    }
    p{
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: 17px;
        font-weight: 600;
        text-shadow: 1px 1px 1px #11404f;
        color: white;
    }
    &:hover{
         transform: scale(1.03);
         box-shadow: 10px 10px 10px #154e5f;
    }
    button{
        position: absolute;
        width: 80px;
        height: auto;
        padding:3px 0 3px 0;
        background-color: #a1dff4;
        right: 10px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
    }

    `