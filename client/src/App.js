import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
