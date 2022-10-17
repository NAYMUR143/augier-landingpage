import "../src/assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Introduction />} />
      </Routes>
    </>
  );
}

export default App;
