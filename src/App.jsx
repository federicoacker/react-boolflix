import { BrowserRouter, Routes, Route } from "react-router";
import PrimaryLayout from "./components/layout/PrimaryLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={PrimaryLayout}>
            <Route path="/" Component={Home} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}
export default App;
