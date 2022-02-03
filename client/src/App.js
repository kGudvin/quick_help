import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./components/pages/MainPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
