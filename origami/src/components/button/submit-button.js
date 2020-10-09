import React from 'react'
import styles from './submit-button.module.css'

const SubmitButton = ({title  , onClick}) => {
    return(
    <button type="submit" className={styles.submit}
    onClick={onClick}>{title}</button>
    )
}

export default SubmitButton