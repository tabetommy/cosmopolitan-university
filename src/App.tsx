import React from 'react';
import './App.css';
import Main from './components/main/main';
import HeaderComponent from './components/headerComponent/headerComponent';
import Container from 'react-bootstrap/Container';
import FooterComponent from './components/footer/footer';



const App=()=>{
  return (
    <Container fluid className='px-0'>
      <HeaderComponent />
      <Main />
      <FooterComponent />
    </Container>
    
  );
}

export default App;
