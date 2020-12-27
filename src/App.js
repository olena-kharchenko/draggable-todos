import { useState, useEffect, useRef } from 'react';
import DraggableList from './components/DraggableList';
import Container from './components/Container';

function App() {
  useEffect(() => {}, []);

  return (
    <Container>
      <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />
    </Container>
  );
}

export default App;
