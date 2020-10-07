import React, { Component } from 'react'
import Link from '../link/index'
import styles from './index.module.css'
import logo from '../../images/origam.jpg'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Header extends Component {

    static contextType = UserContext
    render() {

        const {
            loggedIn,
            user
        } = this.context

        const links = getNavigation(loggedIn, user)

        return (
            <header className={styles.navigation}>
                <img className={styles.logo} src={logo} />
                {
                    links.map(navElement => {
                        return (
                            //navElement is the key (don't forget the key !!!)
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="header" />
                        )
                    })
                }
            </header>
        )
    }
}

export default Header