import { useState, useEffect } from 'react';
import DraggableList from './components/DraggableList';
import Container from './components/Container';
import initialTodos from './todos.json';

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));
  // };

  const deleteTodo = todoId => {
    console.log(todoId);
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <Container>
      {/* <TodoEditor onSubmit={this.addTodo} /> */}

      <DraggableList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </Container>
  );
}

export default App;
