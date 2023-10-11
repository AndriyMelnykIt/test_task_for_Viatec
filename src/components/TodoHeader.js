import React, {useState} from 'react';
import Button, {SelectButton} from "./Button";
import TodoModal from "./TodoModal";

import styles from '../style/module/app.module.scss'

const TodoHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <h1>Hello</h1>
      <Button variant='primary' onClick={() => setModalOpen(true)}>Add Task</Button>
      <SelectButton id='status'>
        <option value='all'>all</option>
        <option value='incomplete'>incomplete</option>
        <option value='complete'>complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default TodoHeader;
