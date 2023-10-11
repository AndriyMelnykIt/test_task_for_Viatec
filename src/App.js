import React from "react";
import {Toaster} from "react-hot-toast";

import TodoTitle from "./components/TodoTitle";
import TodoHeader from "./components/TodoHeader";
import TodoContent from "./components/TodoContent";

import styles from './style/module/app.module.scss'

function App() {
  return (
    <>
      <div className="container">
        <TodoTitle>TODO LIST</TodoTitle>
        <div className={styles.app__wrapper}>
          <TodoHeader />
          <TodoContent />
        </div>
      </div>
      <Toaster
        position='bottom-right'
        toastOptions ={{
          style: {
            fontSize: '1.4rem',
          }
      }}
      />
    </>
  );
}

export default App;
