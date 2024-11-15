import reactLogo from './assets/react.svg'
import axios from "axios";
import {useState, useEffect} from "react";
import AuthProvider from 'react-auth-kit';
import store from './auth/authStore.js';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    redirect,
    Link,
} from "react-router-dom";

function App() {
    console.log(store);

    return (
        <AuthProvider store={store}>
            <Router>
                <Routes>
                    {/*<Route path="/login" element={loggedIn ? <Navigate to={"/"}/> : (loggedIn === false && <Login/>) } />*/}
                    {/*<Route path="/register" element={loggedIn ? <Navigate to={"/"}/> : (loggedIn === false && <Register/>) }/>*/}
                    {/*<Route path="/" element={loggedIn ? <Homepage/> : (loggedIn === false && <Navigate to={"/login"}/>) }/>*/}
                    {/*<Route path="/">*/}
                    {/*    <Route index element={loggedIn ? <Homepage/> : (loggedIn === false && <Navigate to={"/login"}/>) }/>*/}
                    {/*    <Route path=":hash" element={loggedIn ? <Homepage/> : (loggedIn === false && <Navigate to={"/login"}/>) }/>*/}
                    {/*</Route>*/}
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
