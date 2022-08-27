import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import WebFont from "webfontloader";
import Classes from './components/pages/classes/Classes';
import NavigationHeader from './components/navigation/header/NavigationHeader';
import NavigationFooter from './components/navigation/footer/NavigationFooter';
import ClassInformation from './components/pages/classInformation/ClassInformation'
import About from './components/pages/about/About';

function App() {
  const [backGroundImagePath, setBackGroundImagePath] = useState("");
  const changeBackground = (value) => {
    setBackGroundImagePath(value);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik", "Dosis","Teko","Mukta"],
      },
    });
  }, [])

  const containerStyle = {
    backgroundImage:
      `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${backGroundImagePath})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
  };

  const containerDefaultStyle={
     backgroudColor:'#fff',
  }

  return (
    <BrowserRouter>
      <div style={backGroundImagePath!=="" ?containerStyle:containerDefaultStyle}>
      
        <NavigationHeader  textStyle={backGroundImagePath!=="" ? 'dark':'light'} />
        <Routes>
          <Route path='/' element={<Home changeBackground={changeBackground}></Home>} />
          <Route exact path='/classes' element={<Classes changeBackground={changeBackground}></Classes>} />
          <Route path='/classes/:id' element={<ClassInformation ></ClassInformation>} />
          <Route path='/about' element={<About ></About>} />
        </Routes>
      </div>
      <NavigationFooter />

    </BrowserRouter>
  );
}

export default App;