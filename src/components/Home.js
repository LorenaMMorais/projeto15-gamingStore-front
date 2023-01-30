import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Header from "./Header";
import SideBar from "./SideBar";

import logo from "../assets/logo.png";
import axios from "axios";

export default function Home() {
    const [hidden, setHidden] = useState(true);
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

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
            <ContainerFeaturedGames>
                <Title>Destaques</Title>
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
            </ContainerFeaturedGames>
            <Categories>
                <Title>Categories</Title>
                <CategoriesBox>    
                    <Category onClick={() => navigate(`/category`)}>
                        <img src={logo} alt="Logo"/>
                        <p>Ação</p>
                    </Category>
                    <Category onClick={() => navigate(`/category`)}>
                        <img src={logo} alt="Logo"/>
                        <p>Aventura</p>
                    </Category>
                    <Category onClick={() => navigate(`/category`)}>
                        <img src={logo} alt="Logo"/>
                        <p>Casual</p>
                    </Category>
                    <Category onClick={() => navigate(`/category/Terror`)}>
                        <img src={logo} alt="Logo"/>
                        <p>Terror</p>
                    </Category>
                </CategoriesBox>
            </Categories>
        </Container>
    )
}
//Destaques
const Container = styled.div`
    background-color: #232E3A;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    justify-content: start;
    box-sizing: border-box;
`

const ContainerFeaturedGames = styled.div`
    width: 100vw;
    height: 270px;
    display: flex;
    padding: 0 10px;
    align-itens: center;
    flex-direction: column;
`

const Title = styled.h1`
    height: 34px;
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`

const Games = styled.div`
    display: flex;
    flex-direction: inline;
    align-items: center;
    gap: 15px;
    overflow: scroll;
    overflow-y: hidden;
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
//Categorias
const Categories = styled.div`
    width: 100vw;
    height: 270px;
    display: flex;
    padding: 0 10px;
    margin-bottom: 10px;
    align-itens: center;
    flex-direction: column;
`

const CategoriesBox = styled.div`
    display: flex;
    flex-direction: inline;
    align-items: center;
    gap: 15px;
    overflow: scroll;
`

const Category = styled.div`
    position: relative;
    width: 243px;
    height: 236px;
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: overlay;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        width: 243px;
        height: 236px;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    p{
        position: absolute;
        width: 224px;
        height: 24px;
        left: 88px;
        font-family: 'Fira Sans';
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`