import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Swal from "sweetalert2";
import apiAuth from "../services/apiAuth";
import Header from "./Header";
import SideBar from "./SideBar";

export default function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    function handleForm({ name, value }) {
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        apiAuth.signup(form)
            .then(res => {
                console.log(res.data)

                setIsLoading(false)
                navigate("/sign-in")
            })
            .catch(err => {
                console.log(err.response.data)

                setIsLoading(false)
                const errorMessage = err.response.data.message
                if (!errorMessage) return alert("error 404")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${errorMessage}`
                })
            })
    }

    return (
        <Container>
            <Header hidden={hidden} setHidden={setHidden} />
            <SideBar hidden={hidden} setHidden={setHidden} />

            <Title>Crie sua Conta</Title>

            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    placeholder="Nome*"
                    name="name"
                    type="text"
                    value={form.name}
                    disabled={isLoading}
                    onChange={e =>
                        handleForm({
                            name: e.target.name,
                            value: e.target.value
                        })}
                />
                <StyledInput
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    value={form.email}
                    disabled={isLoading}
                    onChange={e =>
                        handleForm({
                            name: e.target.name,
                            value: e.target.value
                        })}
                />
                <StyledInput
                    placeholder="Senha*"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    disabled={isLoading}
                    onChange={e =>
                        handleForm({
                            name: e.target.name,
                            value: e.target.value
                        })}
                />
                <ion-icon
                    name={"eye" + (showPassword ? "-off" : "")}
                    onClick={() => setShowPassword(!showPassword)}>
                </ion-icon>

                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#fff" />
                    ) : "Cadastrar"}
                </StyledButton>

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
    cursor: default;
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
        cursor: pointer;
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
    display:flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 2px;
    border: 1px solid #585B62;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    color: #B5B7B9;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
`
const StyledLink = styled(Link)`
    color: #fff;
    font-size: 15px;
    font-weight: lighter;
    span {
        color: lightblue;
    }
`