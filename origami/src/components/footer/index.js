import React from 'react'
import Link from '../link/index.js'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'


const Footer = () => {
    const links = getNavigation()

    return(
        <footer className={styles.footer}>
            <div>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="footer" />
                    )
                })
            }
            </div>
            <p className={styles.university}>Software University</p>
        </footer>
    )
}

export default Footer