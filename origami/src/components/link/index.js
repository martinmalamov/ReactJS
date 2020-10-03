//Creating component 
import React from 'react'
import styles from './index.module.css'

//if page reloading this is because we use <a> tag not LINK component
import {
    Link
} from 'react-router-dom'

const LinkComponent = ( { title , href , type}) => {
    return (
        < div  className={styles[`${type}-list-item`]}>
            <Link to={href} className={styles[`${type}-link`]}>
             {title}
            </Link>
        </div >
    )
}

export default LinkComponent 