
import './App.css';
import Register from './pages/Register/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SelectCategory from './pages/Select category/SelectCategory';
import Home from './pages/Home/Home';
function App() {
  return (
  <div>
    <BrowserRouter>

  
    <Routes >
      <Route path='/register' element={<Register/>} />
      <Route path='/category' element={<SelectCategory/>} />
      <Route path='/home' element={<Home/>} />
      </Routes>
      {/* <Routes>   </Routes> */}
   
   
    </BrowserRouter>

  </div>

  );
}

export default App;
