
import "./App.css";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Title from "./components/Title";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./Login"
function App() {
  
  



  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Title />}/>
        </Routes>
      </Router>
      
      
    </div>
    
  );
}

export default App;
