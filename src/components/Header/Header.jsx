import { useNavigate } from "react-router"
import SearchBar from "./SearchBar"
import useSearchContext from "../../hooks/useSearchContext";


function Header() {
    const navigate = useNavigate();
    const {setIsSearching} = useSearchContext();
    return (
        <header className="d-flex pt-4 main-header">
            <h1 className="h1 text-danger me-4 main-logo" onClick={()=>{
                setIsSearching(false);
                navigate("/");
                }}>BoolFlix</h1>
            <SearchBar/>
        </header>
    )
}

export default Header