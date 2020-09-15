import React from 'react'
import styles from './index.module.css'
import image from '../../images/origam.jpg'

const Origam = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <p className={styles.description}>
                <span>{index} - </span>
                {description}
            </p>
            <div>
                <span className={styles.username}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Origam