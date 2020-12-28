import './ToDoList.css';

const ToDoList = ({ todos, onDeleteToDo }) => (
  <ul className="TodoList">
    {/* {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteToDo(id)}>Удалить</button>
      </li>
    ))} */}
  </ul>
);

export default ToDoList;
