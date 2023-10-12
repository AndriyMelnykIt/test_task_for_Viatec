import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {MdOutlineClose} from "react-icons/md";
import toast from 'react-hot-toast';

import {addTodo} from "../slices/todoSlice";
import {v4 as uuid} from 'uuid';

import Button from "./Button";

import styles from '../style/module/modal.module.scss'

const TodoModal = ({type, modalOpen, setModalOpen}) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title')
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          }));
        toast.success('Task Added Successfully');
        setModalOpen(false);
      }
      if (type === 'update') {
        console.log('updating test')
      }
    } else {
      toast.error('Title shouldn`t be empty');
    }
  };

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeButton}
               onClick={() => setModalOpen(false)}
               onKeyDown={() => setModalOpen(false)}
               tabIndex={0}
               role='button'
          >
            <MdOutlineClose/>
          </div>
          <form className={styles.form} onSubmit={e => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {' '}
              {type === 'update' ? 'Update' : 'Add'}
              Task
            </h1>
            <label htmlFor="title">
              Title
              <input type="text"
                     id='title'
                     value={title}
                     onChange={e => setTitle(e.target.value)}/>
            </label>
            <label htmlFor="status">
              Status
              <select name="status"
                      id="status"
                      value={status}
                      onChange={e => setStatus(e.target.value)}>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <Button type='submit' variant='primary'>
                {type === 'update' ? 'Update' : 'Add'}
                Add Task
              </Button>
              <Button type='button' variant='secondary'
                      onClick={() => setModalOpen(false)}
                      onKeyDown={() => setModalOpen(false)}
              >
                Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TodoModal;