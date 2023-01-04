// import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
  
  <Navbar title="Hello" homebar="Homebar" />
  <div className="container">
  <Form heading="Textarea" />
  <About/>
  
  </div>
  </>
  );
}

export default App;
