import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import AddUser from './components/AddUser';
import GetUser from './components/GetUser';

function App() {
  return (
    <Router>

    <div className="container">
      <h1>Welcome</h1>
      <Link to="/create">Create User!!</Link><br/>
      <Link to="/search">Find User</Link><br/>
      <Route path="/create" exact component={AddUser} /><br/>
      <Route path="/search" exact component={GetUser}/><br/>
      </div>
    </Router>

  

    
  );
}

export default App;
