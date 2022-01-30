import React from 'react';
import "./app.css";
import SignUp from './Components/signUp';
import Signin from './Components/signin';
import { Routes, Route, Navigate } from "react-router-dom";


const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path="/login" element={<Signin />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/" element={<Navigate to="/login"/>}/>
            </Routes>
        </div>
    );
};

export default App;