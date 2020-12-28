import { useState, useEffect, useRef } from 'react';

import ToDoList from './components/ToDoList';
import DraggableList from './components/DraggableList';
import Container from './components/Container';
import initialTodos from './todos.json';

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const deleteToDo = toDoId => {
    setTodos(todos.filter(todo => todo.id !== toDoId));
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <DraggableList
        items={todos.map(item => item.text)}
        onDeleteToDo={deleteToDo}
      />
    </Container>
  );
}

export default App;
