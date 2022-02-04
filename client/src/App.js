import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";
import AddTask from "./components/pages/AddTask/AddTask";
import FindTask from "./components/pages/FindTask/FindTask";
import Tasks from "./components/pages/Tasks/TasksPage/Tasks";


import AuthUser from './components/ProtectedAuth/AuthUser';
import Signupform from './components/SignUpForm/SignUpForm';
import Signinform from "./components/SignInForm/SignInForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./redux/actions/userAC";
import OneTaskPage from "./components/pages/Tasks/OneTaskPage/OneTaskPage";


function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
  },[])
  return (
    <>
      <Header/>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="addtask" element={<AddTask/>}/>
        <Route path="findtask" element={<FindTask/>}/>
        <Route path="tasks" element={<Tasks/>}/>
        <Route path="tasks/userstasks/:id" element={<OneTaskPage/>}/>
        
        <Route path='/signin' element={
              <AuthUser>
                <Signinform/>
              </AuthUser>
            }/>
            <Route path='/signup' element={
              <AuthUser>
                <Signupform/>
              </AuthUser>
            }/>

      </Routes>
    </>
  );
}

export default App;
