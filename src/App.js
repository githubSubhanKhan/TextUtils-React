import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; //Old Version
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //New Version


function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const alertFunction = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#010f24'
      alertFunction("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark";

      // //For Blinking Title
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // //For Blinking Title
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = 'white'
      alertFunction("Light Mode Enabled", "success");
      document.title = "TextUtils - Light";
    }
  }

  const redTheme = () => {
    setTheme('red');
    document.body.style.backgroundColor = '#C91A42';
    alertFunction("Red Mode Enabled", "success");
  }

  const greenTheme = () => {
    setTheme('green');
    document.body.style.backgroundColor = '#21936B';
    alertFunction("Green Mode Enabled", "success");
  }

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          theme={theme}
          toggleTheme={toggleTheme}
          redTheme={redTheme}
          greenTheme={greenTheme}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path='/about' element={<About />} /> */}
            {/* <Route exact path='/' element={ */}
              <TextForm
                alertFunction={alertFunction}
                heading="Text Analyzer"
                theme={theme}
              />
            {/* } /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
