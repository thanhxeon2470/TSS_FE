import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
    console.log(process.env.REACT_APP_NAME)
    return (
    <div>
      <Routes>
        <Route path="/auth" >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
