import React, { Component } from 'react'
import Link from '../link/index.js'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context.js'

class Footer extends Component {

  static contextType = UserContext
  render() {

    const {
      loggedIn,
      user
    } = this.context

    const links = getNavigation(loggedIn, user)

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
}

export default Footer