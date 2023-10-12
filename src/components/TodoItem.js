import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {MdDelete, MdEdit} from "react-icons/md";
import {toast} from "react-hot-toast";
import {format} from 'date-fns/esm';
import {getClasses} from "../utils/getClasses";
import {deleteTodo} from "../slices/todoSlice";

import TodoModal from "./TodoModal";

import styles from '../style/module/todoItem.module.scss'

const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
    toast.success('Todo Deleted Successfully');
  }

  const handleUpdate = () => {
    setUpdateModalOpen(true)
  }

  return (
    <>
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

      <TodoModal
        type='update'
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}/>
    </>
  );
};

export default TodoItem;