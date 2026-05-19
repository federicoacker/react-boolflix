import SearchBar from "./SearchBar"


function Header() {
    return (
        <header className="d-flex pt-4 main-header">
            <h1 className="h1 text-danger me-4">BoolFlix</h1>
            <SearchBar/>
        </header>
    )
}

export default Header