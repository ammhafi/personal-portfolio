import './App.css';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Pages from './pages/Pages';

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Pages />
    </>
  );
}

export default App;
