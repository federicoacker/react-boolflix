import { Outlet } from "react-router"
import Header from "../Header/Header"
import Main from "../Main/Main"

function PrimaryLayout() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}

export default PrimaryLayout