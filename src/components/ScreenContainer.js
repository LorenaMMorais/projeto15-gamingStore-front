import styled from "styled-components"
import Header from "./Header.js"
import SideBar from "./SideBar.js"

export default function ScreenContainer({ children }) {
    return (
        <Container>
            <Header />
            {children}
            <SideBar />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 72px);
    padding: 72px 20px 100px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    /* position: absolute;
    bottom: 0; */
`