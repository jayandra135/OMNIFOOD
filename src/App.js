import './App.css';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Contact from './MyComponents/CONTACT/Contact';
import Navbar from './MyComponents/NAVBAR/Navbar';
import Footer from './MyComponents/FOOTER/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  
  return (
    <>
    <Router>
    <Navbar></Navbar>
    
      <Switch>
     
        <Route exact path="/" >
          <div className="card">
            <div className="card-body">
            <h1>WELCOME TO OMNIFOOD</h1>
            <h4>CLick AT <a href="/home">HOME</a></h4>
            </div>
              
          </div>
         
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        
   
    </Switch>
    <Footer></Footer>
    
     </Router>
    </>
 
  );
}

export default App;
