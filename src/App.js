import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import About2 from './components/About2';
import React,{useState} from 'react';
import Alert from'./components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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


  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  

  const toggleMode = (cls) =>{
    removeBodyClasses();
  console.log(cls);
  document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode ('dark')
      setSwText('Enable Light Mode')
      document.body.style.backgroundColor = '#091f42';
      showAlert('Dark mode has been enabled','success')

    }else if(mode === 'dark'){

      setMode ('light')
      setSwText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success')

    }
  }

  

  return (<>
  <Router>
  <Navbar title="TextUtils" about="About" sw2Text={swText} mode2={mode} toggleMode2={toggleMode}/>
  <Alert alert2={alert}/>
  <div className="container my-8">
  <Switch>
          <Route exact path="/">
          <Textarea showAlert2={showAlert} heading="Please enter your text below:" mode2={mode} place='Enter your text here'/>
          </Route>
          <Route exact path="/about">
          <About mode2={mode} showAlert2={showAlert} />
          </Route>
          <Route exact path="/topics">
            <About2 showAlert2={showAlert} />
          </Route>
  </Switch>
  </div>
   </Router>
  </>
  );
}

export default App;
