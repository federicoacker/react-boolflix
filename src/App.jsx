import { BrowserRouter, Routes, Route } from "react-router";
import PrimaryLayout from "./components/layout/PrimaryLayout";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route Component={PrimaryLayout}>
          <Route path="/" Component={Home}/>
          <Route path="*" Component={NotFound}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
