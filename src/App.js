import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { RiAddCircleLine } from 'react-icons/ri';
import TodoEditor from './components/TodoEditor';
import DraggableList from './components/DraggableList';
import Container from './components/Container';
import Modal from './components/Modal';
import initialTodos from './todos.json';
import './App.css';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [showModal, setShowModal] = useState(false);

  const addTodo = text => {
    if (text) {
      const todo = {
        id: shortid.generate(),
        text,
        completed: false,
      };
      setTodos([todo, ...todos]);
    }
    toggleModal();
  };

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="head">
        <h1 className="title">TODOS</h1>

        <RiAddCircleLine
          className="add"
          onClick={toggleModal}
          aria-label="add todo"
        />
      </div>
      <Container>
        <DraggableList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleCompleted={toggleCompleted}
        />
        {showModal && (
          <Modal onClose={toggleModal}>
            <TodoEditor onSubmit={addTodo} />
          </Modal>
        )}
      </Container>
    </>
  );
}

export default App;
