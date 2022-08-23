import {Routes,Route,BrowserRouter}  from 'react-router-dom'
import './App.css';
import NavigationHeader from './components/navigation/header/NavigationHeader';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
      <NavigationHeader/>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
