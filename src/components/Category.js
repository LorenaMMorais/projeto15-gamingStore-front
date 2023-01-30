import styled from "styled-components";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import axios from "axios";

export default function Category() {
    const [hidden, setHidden] = useState(true);
    const [products, setProducts] = useState([]);
    
    //const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts(){
        try{
            const products = await axios.get(`${process.env.REACT_APP_API_URL}/products`);

            setProducts(products.data);
        }catch(error){
            alert('Não foi possível pegar produtos');
            console.log(error.message);
        }
    }

    return (
        <Container>
            <Header hidden={hidden} setHidden={setHidden} />
            <SideBar hidden={hidden} setHidden={setHidden} />
            <CategoryBox>
                <Title>Categoria</Title>
                <Games>
                        {products.map((product) => (
                            <GameCard>
                                <DataGame>
                                    <ImgGame src={product.newProduct.image[0]}/>
                                    <TitleGame>{product.newProduct.name}</TitleGame>
                                    <ValueGame>R$ {product.newProduct.value}</ValueGame>
                                </DataGame>
                                <CartBox><ion-icon name="cart"></ion-icon></CartBox>
                            </GameCard>
                        ))}
                    </Games>
            </CategoryBox>
        </Container>
    )
}

const Container = styled.div`
    background-color: #232E3A;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    justify-content: start;
    box-sizing: border-box;
`

const CategoryBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 10px;
    align-itens: center;
    flex-direction: column;
`

const Title = styled.h1`
    width: 324px;
    height: 58px;
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    backdrop-filter: blur(2px);
`

const Games = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    overflow: scroll;
`

const GameCard = styled.div`
    position: relative;
    width: 300px;
    height: 202px;
    display: flex;
    align-itens: center;
    background: #343F4B;
    mix-blend-mode: luminosity;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px 5px 5px 5px;
`

const ImgGame = styled.img`
    width: 300px;
    height: 140px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px 5px 0px 0px;

`
const DataGame = styled.div`
    width: 300px;
    height: 60px;
`

const TitleGame = styled.h2`
    width: 297px;
    height: 34px;
    margin-left: 10px;
    font-family: 'Fira Sans';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`

const ValueGame = styled.p`
    width: 297px;
    height: 30px;
    margin: 0 10px;
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`

const CartBox = styled.div`
    position: absolute;
    width: 45px;
    height: 63px;
    left: 255px;
    top: 139px;
    background: #171A21;
    backdrop-filter: blur(2px);
    border-radius: 0px 0px 5px 0px;
    ion-icon {
        font-size: 42px;
        color: #5A5D63;
    }
`