import Landing from './components/landing';
import Whyus from './components/whyus';
import Footer from './components/footer';
import AOS from 'aos';
import "aos/dist/aos.css";
import Layout from './components/layout';
import { useEffect, useState } from 'react';
import Why from './components/why';
import CursorFollower from './components/cursorfollower';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])



  return (
    <div>
      <Layout>
        <Landing/>

        <Why/>
        <Whyus/>

        <Footer/>
      </Layout>
      
    </div>
  
  );
}

export default App;
