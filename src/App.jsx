import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
        </Router>
  
    </div>
  );
}

export default App;