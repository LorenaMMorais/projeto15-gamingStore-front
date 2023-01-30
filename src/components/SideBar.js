import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SideBar({ hidden, setHidden }) {
    return (
        <>
            <DarkerBackground
                visibility={`${hidden}`}
                onClick={() => hidden ? "" : setHidden(!hidden)}
            ></DarkerBackground>

            <Menu visibility={`${hidden}`}>
                <MenuContent>
                    <StyledLink to="/sign-in">Login</StyledLink>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/cart">Carrinho</StyledLink>
                </MenuContent>
            </Menu>
        </>
    )
}

const DarkerBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    display: ${(props) => props.visibility ? "none" : ""};
    transition: all 150ms linear;
`
const Menu = styled.aside`
    width: 280px;
    height: 100%;
    background-color: #232E3A;
    box-shadow: 0 0 7px 0 rgb(0 0 0 / 75%);

    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    transition: all 400ms ease-in-out;

    right: ${(props) => props.visibility ? "-280px" : ""};
`
const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

`
const StyledLink = styled(Link)`
    width: 100%;
    height: 76px;
    padding: 20px;

    display: flex;
    justify-content: right;
    align-items: center;

    font-size: 26px;
    font-weight: 200;
    color: #fff;
    border-bottom: 1px solid #171A21;
`