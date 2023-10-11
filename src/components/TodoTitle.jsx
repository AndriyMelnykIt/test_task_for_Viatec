import React from 'react';

import styles from '../style/module/title.module.scss'

const TodoTitle = ({children, ...rest}) => {
  return <p className={styles.title}{...rest}>{children}</p>
};

export default TodoTitle;
