import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Messages from '../components/Messages';
import Dashboard from '../components/Dashboard';
import New from '../components/new';
import Accreditation from '../components/Accredition';

function Secondpage() {
  return (
    <div>
      <Header/>
      <New/>
      <Messages/>
      <Dashboard/>
      <Accreditation/>
      <Footer/>
    </div>
  );
}

export default Secondpage;