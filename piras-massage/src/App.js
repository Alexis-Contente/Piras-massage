import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import NotFound from './components/NotFound/notFound';
import MassagesPage from './components/MassagesPage/massagesPage';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/massages" element=<MassagesPage /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="*" element=<NotFound /> />
      </Routes>
    </>
  );
}

export default App;
