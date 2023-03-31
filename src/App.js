import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert  from './components/Alert';
// import About from './components/About';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }
  const toogleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Aamzing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now';
      }, 1500);

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} aboutText="About Us" />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
        <Route path= "/about" element={<About />}>
        </Route> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Route>
      </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
