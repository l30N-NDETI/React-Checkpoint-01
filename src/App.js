// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const App = () => {
  const firstName = "LEON"; 

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
          <Image />
        </Card.Body>
      </Card>
      <br></br>
      <div>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1RlreKSL7CUGWNoo8ApON8FE3Rm2cU-mCA&s" alt="Placeholder" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;
