import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import SimpleReactFileUpload from './Components/SimpleReactFileUpload';
import Categories from './Components/Categories';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <SimpleReactFileUpload/> } />
        <Route path="/categories" element={ <Categories /> } />
    </Routes>
  );
}

export default App;
