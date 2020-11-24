import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
        <h2 className='py-3'>Welcome To Puissance FC</h2>
        </Container>
     </main>
      <Footer />
    </>
  );
}

export default App;
