import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header";
import SideBar from "./SideBar";

export default function SignUp() {
    const [hidden, setHidden] = useState(true)

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        navigate("/")
    }

    return (
        <Container>
            <Header hidden={hidden} setHidden={setHidden} />
            <SideBar hidden={hidden} setHidden={setHidden} />

            <Title>Crie sua Conta</Title>

            <StyledForm onSubmit={handleSubmit}>
                <StyledInput placeholder="Nome*"></StyledInput>
                <StyledInput placeholder="E-mail*"></StyledInput>
                <StyledInput placeholder="Senha*"></StyledInput>

                <ion-icon name="eye-off"></ion-icon>

                <StyledButton>Cadastrar</StyledButton>
                
                <StyledLink to="/sign-in">
                    Já tem uma conta? <span>Faça login</span>
                </StyledLink>
            </StyledForm>
        </Container>
    )
}

const Container = styled.div`
    background-color: #171A21;
    width: 100vw;
    height: 100vh;
    /* padding: 90px 20px 100px 20px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    box-sizing: border-box;
`
const Title = styled.h1`
    color: #fff;
    font-size: 34px;
    text-transform: uppercase;
    letter-spacing: .055em;
    font-weight: 200;
`
const StyledForm = styled.form`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    ion-icon {
        position: absolute;
        right: 10px;
        bottom: 131.5px;
        color: #171A21;
        font-size: 28px;
    }
`
const StyledInput = styled.input`
    background-color: #B5B7B9;
    width: 270px;
    height: 45px;
    /* margin-bottom: 10px; */
    padding: 10px;
    outline: none;
    border: 1px solid #B5B7B9;
    border-radius: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    color: #171A21;
    font-size: 15px;
`
const StyledButton = styled.button`
    background-color: transparent;
    width: 270px;
    height: 45px;
    margin: 20px 0;
    border: none;
    border-radius: 2px;
    border: 1px solid #585B62;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    color: #B5B7B9;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`
const StyledLink = styled(Link)`
    color: #fff;
    font-size: 15px;
    font-weight: lighter;
    span {
        color: lightblue;
    }
`