import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./components/pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import AddTask from "./components/pages/AddTask/AddTask";
import FindTask from "./components/pages/FindTask/FindTask";
import Tasks from "./components/pages/Tasks/TasksPage/Tasks";
import Protectedauth from './components/ProtectedAuth/ProtectedAuth'
import AuthUser from "./components/ProtectedAuth/AuthUser";
import Signupform from "./components/SignUpForm/SignUpForm";
import Signinform from "./components/SignInForm/SignInForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./redux/actions/userAC";
import Verification from "./components/Verification/Verification";
import UserPage from "./components/pages/UserPage/UserPage"
import OneTaskPage from "./components/pages/Tasks/OneTaskPage/OneTaskPage";
import Ymap from "./components/pages/Ymap/Ymap"
import Footer from "./components/Footer/Footer";
import OrganizationPage from "./components/pages/OrganizationPage/OrganizationPage";



function App() {
  const user = useSelector(state=> state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="addtask" element={<AddTask/>}/>
        <Route path="findtask" element={<FindTask/>}/>
        <Route path="tasks" element={<Tasks/>}/>
        <Route path="tasks/userstasks/:id" element={<OneTaskPage/>}/>
        <Route path="/organization" element={<OrganizationPage/>} />
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

        <Route
          path="/signin"
          element={
            <AuthUser>
              <Signinform />
            </AuthUser>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthUser>
              <Signupform />
            </AuthUser>
          }
        />
        <Route
          path="/personal"
          element={
            <Protectedauth>
              <UserPage />
            </Protectedauth>
          }
        />
        <Route
          path="/quizz"
          element={
            <Protectedauth>
              <Verification />
            </Protectedauth>
          }
        />
        <Route path="/test" element={<Ymap/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
