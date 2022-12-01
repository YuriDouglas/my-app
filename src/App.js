import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import{ Home } from './pages/home/index.jsx'
import{ Login } from './pages/login/index.jsx'
import{ Feed } from './pages/feed/index.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
      </Router>
  );
}

export default App;
