import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout/index.js'
import Title from '../../components/title/index.js'
import Origamis from '../../components/origamis'
import SubmitButton from '../../components/button/submit-button.js'

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <div className={styles.container}>
        <div>
          <textarea className={styles.textarea}>Publication...</textarea>
        </div>
        <div>
          <SubmitButton title="Post" />
        </div>
      </div>
      <Origamis length={3}/>
    </PageLayout>
  );
}

export default ShareThoughtsPage