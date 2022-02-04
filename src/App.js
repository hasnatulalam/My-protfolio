import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer'

import TopscrollButton from './components/TopscrollButton/TopscrollButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';
import Contact from './components/Contact/Contact';


function App() {
  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        delay: 10,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        once: true
      }
    );
  }, [])
  return (

    <div className="App">
      <Header />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Contact></Contact>
      <Footer></Footer>
      <TopscrollButton />
    </div>

  );
}

export default App;
