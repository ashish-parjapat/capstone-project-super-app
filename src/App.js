
import './App.css';
import Register from './pages/Register/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SelectCategory from './pages/Select category/SelectCategory';
import Home from './pages/Home/Home';
import Movies from './pages/Movies Generies/Movies';
function App() {
  return (
  <div>
    <BrowserRouter>

  
    <Routes >
      <Route path='/' element={<Register/>} />
      <Route path='/category' element={<SelectCategory/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      </Routes>
      {/* <Routes>   </Routes> */}
   
   
    </BrowserRouter>

  </div>

  );
}

export default App;
