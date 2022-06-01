import { Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
