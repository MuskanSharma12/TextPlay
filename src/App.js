
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
   <Navbar title="TextPlay"/>
   <div className='container' my-3="true">
    <TextForm heading="Enter your text"/>
   </div>
   
   </>
  );
}

export default App;
