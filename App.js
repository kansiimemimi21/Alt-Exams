
import './App.css';
import About from './About';
import Products from './Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import NavMenu from './NavMenu';
import { Errorboundary } from './error';


function App() {
  return (
  
    <div className="App">
      <Errorboundary>
        <NavMenu />    
      <h1>Welcome To Infinity Liquore Store</h1>
   <Router>
    <nav>
  
    </nav>
    <Routes>
      <Route path='/' element= {<About />} />
      </Routes>
      <Routes>
      <Route path='/' element= {<Products/>} />
      </Routes>
      <Routes>
      <Route path='/' element= {<Home/>} />
    </Routes>

   </Router>
   </Errorboundary>
    </div>
  );
}

export default App;
