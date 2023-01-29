import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header({ children, hidden, setHidden }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            {children}
            <ion-icon name="menu" onClick={ () => hidden? setHidden(!hidden) : "" }></ion-icon>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 72px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); */
    background-color: #171A21;
    ion-icon {
        font-size: 42px;
        color: #5A5D63;
    }
`