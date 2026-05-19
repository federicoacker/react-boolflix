import { Outlet } from "react-router"
import Header from "../Header/Header"
import Main from "../Main/Main"
import { Container } from "react-bootstrap"

function PrimaryLayout() {
    return (
        <>
            <div className="app-wrapper">
                <div className="header-wrapper bg-dark pb-4 d-flex align-items-center">
                    <Container>
                        <Header />
                    </Container>
                </div>
                <div className="main-wrapper">
                    <Container fluid="xxxl">
                        <Main>
                            <Outlet />
                        </Main>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default PrimaryLayout