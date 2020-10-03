import React from 'react'
import Link from '../link/index.js'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation()
    return (
      <footer className={styles.footer}>
        <div className={styles.foot}>
          {
            links.map(navElement => {
              return (
                <Link
                  key={navElement.title}
                  href={navElement.link}
                  title={navElement.title}
                  type="footer"
                />
              )
            })
          }
        <p className={styles.university}>Created by Martin Malamov</p>
        </div>

      </footer>
    )
}

export default Footer