import React from 'react'
import styles from './index.module.css'
import image from '../../images/origam.jpg'

const Origam = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img alt="origam" className={styles.image} src={image} />
            <div className={styles.description}>
                <span>{index} - </span>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <p>
                <span className={styles.username}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </p>
        </div>
    )
}

export default Origam