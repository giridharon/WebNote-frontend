import { useState } from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import NoteForm from './pages/NoteForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/note" element={<NoteForm/>}/>
      </Routes>
      
    </>
  )
}

export default App
