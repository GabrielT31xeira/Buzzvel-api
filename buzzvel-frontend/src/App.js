import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import FormUser from './components/welcome/FormUser';
import View from './components/user/View';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="generate" />} />
        <Route path="/generate" element={<FormUser />} />
        <Route path="/:name" element={<View />}/>
      </Routes>
    </div>
  );
}

export default App;
