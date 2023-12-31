import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {MdOutlineClose} from "react-icons/md";
import toast from 'react-hot-toast';
import {AnimatePresence, motion} from 'framer-motion';

import {addTodo, updateTodo} from "../slices/todoSlice";
import {v4 as uuid} from 'uuid';

import Button from "./Button";

import styles from '../style/module/modal.module.scss'

const dropIn = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
};

const TodoModal = ({type, modalOpen, setModalOpen, todo}) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title')
      return;
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
      }

      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({
            ...todo,
            title,
            status
          }));
        } else {
          toast.error('No Changes Made')
        }
      }
      setModalOpen(false)
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div className={styles.wrapper}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <motiondiv className={styles.closeButton}
                 onClick={() => setModalOpen(false)}
                 onKeyDown={() => setModalOpen(false)}
                 tabIndex={0}
                 role='button'
                 initial={{top: 40,
                  opacity: 0
                 }}
                 animate={{top: -10, opacity: 1}}
                 exit={{ top: 40, opacity: 0}}
            >
              <MdOutlineClose/>
            </motiondiv>
            <form className={styles.form} onSubmit={e => handleSubmit(e)}>
              <h1 className={styles.formTitle}>
                {type === 'add' ? 'Add' : 'Update'} TODO
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
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button type='button' variant='secondary'
                        onClick={() => setModalOpen(false)}
                        onKeyDown={() => setModalOpen(false)}
                >
                  Cancel</Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TodoModal;