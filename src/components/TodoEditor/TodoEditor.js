import { useState } from 'react';
import { MdDone, MdClose } from 'react-icons/md';
import s from './TodoEditor.module.css';

function TodoEditor({ onSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form className={s.TodoEditor} onSubmit={handleSubmit}>
      <textarea
        className={s.textarea}
        value={message}
        onChange={e => setMessage(e.currentTarget.value)}
      ></textarea>

      <button type="submit" className={s.button} aria-label="save">
        <MdDone />
      </button>
    </form>
  );
}

export default TodoEditor;
