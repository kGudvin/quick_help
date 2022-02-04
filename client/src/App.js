import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import FindTask from "./components/FindTask/FindTask";
import Tasks from "./components/Tasks/Tasks";



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="addtask" element={<AddTask/>}/>
        <Route path="findtask" element={<FindTask/>}/>
        <Route path="tasks" element={<Tasks/>}/>
      </Routes>
    </>
  );
}

export default App;
