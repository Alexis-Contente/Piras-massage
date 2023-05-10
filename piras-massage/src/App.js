import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import NotFound from './components/NotFound/notFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="*" element=<NotFound /> />
      </Routes>
    </>
  );
}

export default App;
