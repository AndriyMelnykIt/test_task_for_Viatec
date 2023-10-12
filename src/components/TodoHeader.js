import React, {useState} from 'react';
import Button, {SelectButton} from "./Button";
import TodoModal from "./TodoModal";

import styles from '../style/module/app.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {updateFilterStatus} from "../slices/todoSlice";

const TodoHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  }

  return (
    <div className={styles.appHeader}>
      <h1>Hello</h1>
      <Button variant='primary' onClick={() => setModalOpen(true)}>Add Task</Button>
      <SelectButton id='status' value={filterStatus} onChange={updateFilter}>
        <option value='all'>all</option>
        <option value='incomplete'>incomplete</option>
        <option value='complete'>complete</option>
      </SelectButton>
      <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default TodoHeader;
