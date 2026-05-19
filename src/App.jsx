import { BrowserRouter, Routes, Route } from "react-router";
import PrimaryLayout from "./components/layout/PrimaryLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import MoreInfo from "./pages/MoreInfo";

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route Component={PrimaryLayout}>
            <Route path="/" Component={Home} />
            <Route path="/search" Component={SearchResults} />
            <Route path="/:media_type/:id" Component={MoreInfo}/>
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
    </BrowserRouter>

  );
}
export default App;
