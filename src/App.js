// import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('dark');
  console.log(mode);

  const light = () => {
   if(mode==='dark'){
    setMode('light');
    alertFun("Light mode has been enabled","success");
    document.title = 'Testapp-Light mode';
   }
   else
   {
    setMode('dark');
    alertFun("Dark mode has been enabled","success");
    document.title = 'Testapp-Dark mode';
   }
    }
  const [alert, setAlert] = useState(null);

  const alertFun = (message ,type) => {
  setAlert({
    msg : message,
    type : type

  });
  }
 setTimeout(() => {
   setAlert(null);
 }, 2000);


  return (
    <>
  
   <Router>
  <Navbar title="Hello" homebar="Homebar" mode={mode} light={light} />
  <Alert alert={alert}/>

  <div className="container">
      
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/form" element={<Form heading="Textarea" alert={alertFun} />}/>
         
        </Routes>
      
        </div>
    </Router>
 

  
 
  </>
  );
}

export default App;
