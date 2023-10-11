import React from 'react';
import Button, {SelectButton} from "./Button";
import TodoModal from "./TodoModal";

import styles from '../style/module/app.module.scss'

const TodoHeader = () => {
  return (
    <div className={styles.appHeader}>
      <h1>Hello</h1>
      <Button variant='primary'>Add Task</Button>
      <SelectButton id='status'>
        <option value='all'>all</option>
        <option value='incomplete'>incomplete</option>
        <option value='complete'>complete</option>
      </SelectButton>
      <TodoModal />
    </div>
  );
};

export default TodoHeader;
