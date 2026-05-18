import { Outlet } from "react-router"
import Header from "../Header/Header"
import Main from "../Main/Main"
import { Container } from "react-bootstrap"

function PrimaryLayout() {
    return (
        <>
            <div className="app-wrapper">
                <div className="header-wrapper bg-dark pb-4">
                    <Container>
                        <Header />
                    </Container>
                </div>
                <Container>
                    <Main>
                        <Outlet />
                    </Main>
                </Container>
            </div>
        </>
    )
}

export default PrimaryLayout