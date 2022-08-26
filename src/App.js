import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import WebFont from "webfontloader";
import Classes from './components/pages/classes/Classes';
import NavigationHeader from './components/navigation/header/NavigationHeader';
import NavigationFooter from './components/navigation/footer/NavigationFooter';


function App() {
  const [backGroundImagePath, setBackGroundImagePath] = useState("");
  const changeBackground = (value) => {
    setBackGroundImagePath(value);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik", "Dosis","Teko"],
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

  return (
    <BrowserRouter>
      <div style={containerStyle}>
      
        <NavigationHeader />
        <Routes>
          <Route path='/' element={<Home changeBackground={changeBackground}></Home>} />
          <Route path='/classes' element={<Classes changeBackground={changeBackground}></Classes>} />
        </Routes>
      </div>
      <NavigationFooter />

    </BrowserRouter>
  );
}

export default App;
