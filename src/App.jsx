import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Products from'./pages/Products'
import Customers from'./pages/Customers'
import Categories from './pages/Categories'
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import Setting from './pages/Setting';


function App() {
  return (
    <Router>
    
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Inventory" element={<Inventory/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/Setting" element={<Setting/>}/>


     
      </Routes>

      
    </div>
    </Router>
    
    
    
  );
}

export default App;
