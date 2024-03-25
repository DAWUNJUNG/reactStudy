import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Index from './pages/Profile';

function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />*/}
      {/*<Route path="/profiles/:username" element={<Index />} />*/}
    </Routes>
  );
}

export default App;
