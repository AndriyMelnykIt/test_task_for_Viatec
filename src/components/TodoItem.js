import React from 'react';
import {MdDelete, MdEdit} from "react-icons/md";
import {format} from 'date-fns/esm';
import {getClasses} from "../utils/getClasses";

import styles from '../style/module/todoItem.module.scss'

const TodoItem = ({todo}) => {
  const handleDelete = () => {
    console.log('deleting');
  }
  const handleUpdate = () => {
    console.log('updating');
  }

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        []
        <div className={styles.texts}>
          <p className={getClasses([styles.todoText,
            todo.item === 'complete' && styles['todoText--complete'],
          ])}>
            {todo.title}
          </p>
          <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div className={styles.icon}
             onClick={handleDelete}
             onKeyDown={handleDelete}
             role='button'
             tabIndex={0}
        >
          <MdDelete/>
        </div>
        <div className={styles.icon}
             onClick={handleUpdate}
             onKeyDown={handleUpdate}
             role='button'
             tabIndex={0}
        >
          <MdEdit/>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;