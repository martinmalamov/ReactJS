import React from 'react'
import Header from './components/header/index.js'
import styles from './app.module.css'
import Aside from './components/aside/index.js'
import Origamis from './components/origamis/index'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
    </div>
  );
}

export default App;
