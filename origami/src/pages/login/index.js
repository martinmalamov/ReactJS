import React, { Component } from 'react'
import styles from './index.module.css'
import SubmitButton from '../../components/button/submit-button'
import Title from '../../components/title'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'
// import axios from 'axios'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }

    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {}
        // console.log(event)
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state

        //fetch
        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password,
        },
            (user) => {
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (e) => {
                console.log('Failure', e)

            }

        )
    }

    render() {
        const {
            username,
            password,
        } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input
                        value={username}
                        onChange={(e) => this.handleChange(e, 'username')}
                        label="Username"
                        id="username"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => this.handleChange(e, 'password')}
                        label="Password"
                        id="password"
                    />
                    <SubmitButton title="Login" />
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage
