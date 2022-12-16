import React from 'react';
import './App.css';
import Main from './components/main/main';
import HeaderComponent from './components/headerComponent/headerComponent';
import Container from 'react-bootstrap/Container';
import Navigation from './components/navbar/navbar';


const App=()=>{
  return (
    <Container fluid className='px-0'>
      <HeaderComponent />
      <Navigation />
      <Main />
    </Container>
  );
}

export default App;
