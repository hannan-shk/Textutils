import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import About2 from './components/About2';
import React,{useEffect,useState} from 'react';
import Alert from'./components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[swText ,setSwText] = useState('Enable Dark Mode');
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type2: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  

  const toggleMode = () =>{
    if(mode === 'light'){

      setMode ('dark')
      setSwText('Enable Light Mode')
      document.body.style.backgroundColor = '#091f42';
      showAlert('Dark mode has been enabled','success')
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Web'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);

    }else if(mode === 'dark'){

      setMode ('light')
      setSwText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success')
      document.title = 'TextUtils - Light Mode';

    }
  }

  

  return (<>
  <Router>
  <Navbar title="TextUtils" about="About" mode2={mode} sw2Text={swText} toggleMode2={toggleMode}/>
  <Alert alert2={alert}/>
  <div className="container my-8">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textarea showAlert2={showAlert} heading="Enter your text below:" mode2={mode} place='Enter your text here'/>
          </Route>
          <Route exact path="/topics">
            <About2 />
          </Route>
  </Switch>
  </div>
  </Router>
  {/* <About2 /> */}
  </>
  );
}

export default App;
