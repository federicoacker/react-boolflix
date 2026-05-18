import { BrowserRouter, Routes, Route } from "react-router";
import PrimaryLayout from "./components/layout/PrimaryLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { MovieProvider } from "./contexts/MovieContext";
import SearchResults from "./pages/SearchResults";

function App() {
  return (

    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route Component={PrimaryLayout}>
            <Route path="/" Component={Home} />
            <Route path="/search" Component={SearchResults} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </MovieProvider>
    </BrowserRouter>

  );
}
export default App;
