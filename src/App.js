import './App.css';
import ForgotPassword from './components/ForgotPassword';
import "bootstrap/dist/css/bootstrap.min.css"
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ForgotPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
