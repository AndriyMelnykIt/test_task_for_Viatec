import React from 'react';
import {useSelector} from "react-redux";

import TodoItem from "./TodoItem";

import styles from '../style/module/app.module.scss'

const TodoContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return <div className={ styles.content__wrapper}>
    {sortedTodoList && sortedTodoList.length > 0 ?
      sortedTodoList.map((todo) =>
        <TodoItem key={todo.id} todo={todo} />
      )
      : 'no todo found'}
  </div>
};

export default TodoContent;