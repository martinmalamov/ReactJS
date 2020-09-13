import React from 'react'
import Header from './components/header/index.js'
import styles from  './app.module.css'

const  App = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
