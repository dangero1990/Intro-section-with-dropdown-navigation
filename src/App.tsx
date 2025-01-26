import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const checkScreenSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  });

  return (
    <>
      <Navbar windowSize={windowSize} />
      <Main windowSize={windowSize} />
    </>
  );
}

export default App;
