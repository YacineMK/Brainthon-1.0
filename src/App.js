import './App.css';
import Home from './widget/Home';
import Search from './widget/search';
import Table from './widget/Table';
import User from './widget/User';
import Orders from "./widget/Orders";
import Stats from "./widget/stats"
import Login from "./widget/login"
//import AlgeriaMap from './widget/Alge';
//import Navbar from './widget/navbar';
//import  Navbar  from './widget/navbar'; // Use curly braces to import the named export Navbar
//import Search from './widget/search';



import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/orders" element={<Orders/>}>
        </Route>
        <Route path="/Statistiques" element={<Stats/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);