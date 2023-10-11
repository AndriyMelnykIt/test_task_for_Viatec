import React from "react";

import TodoTitle from "./components/TodoTitle";
import TodoHeader from "./components/TodoHeader";
import TodoContent from "./components/TodoContent";

import styles from './style/module/app.module.scss'

function App() {
  return (
    <div className="container">
      <TodoTitle>TODO LIST</TodoTitle>
      <div className={styles.app__wrapper}>
        <TodoHeader />
        <TodoContent />
      </div>
    </div>
  );
}

export default App;
