import React, { Component } from 'react';
import UserContext from './Context'

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        //trim cookie
        document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    componentDidMount() {
        const token = getCookie('x-auth-token')
        console.log('Token', token)

        if (!token) {
            this.logOut()
            return
        }
        //fetch to REST API
        fetch('http://localhost:9999/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            console.log('Promise', promise)
            return promise.json()
        }).then(response => {
            if (response.status) {
                this.logIn({
                    username: response.username,
                    id: response.user._id
                })
            } else {
                this.logOut()
            }
        })

    }



    render() {
        const {
            loggedIn,
            user
        } = this.state

        if (loggedIn === null) {
            return (<div>Loading...</div>)
        }

        return (
            //with 1 {} mean it is JSX , so we avoid it
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default App


// changeLoggedIn = () => {
//     this.setState({
//         loggedIn: !this.state.loggedIn
//     })
// }