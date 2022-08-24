import { useEffect } from 'react';
import {Routes,Route,BrowserRouter}  from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationHeader from './components/navigation/header/NavigationHeader';
import Home from './components/home/Home';
import WebFont from "webfontloader";
import NavigationFooter from './components/navigation/footer/NavigationFooter';
import Classes from './components/pages/classes/Classes';

function App() {


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik","Dosis"],
      },
    });
  }, [])

  return (
    <BrowserRouter>
      <NavigationHeader/>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/classes' element={<Classes></Classes>}/>
        </Routes>
      <NavigationFooter/>
    </BrowserRouter>
  );
}

export default App;
