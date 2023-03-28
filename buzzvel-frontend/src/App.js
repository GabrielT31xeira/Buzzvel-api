import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import FormUser from './components/welcome/FormUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="generate" />} />
        <Route path="generate" element={<FormUser/>} />
      </Routes>
    </div>
  );
}

export default App;
