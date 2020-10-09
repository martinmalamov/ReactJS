import React, { useState  , useEffect} from 'react';
import UserContext from './Context'
import getCookie from './utils/cookie'

//with React Hooks
const App = (props) => {
    const [user, setUser] = useState(null)
    //we want to see loading while render everything in header
    const [loading, setLoading] = useState(true)

    const logIn = (user) => {
        setUser({
            //we got user.user so we need ...(destruct)
            ...user,
            loggedIn: true
        })
    }

    const logOut = () => {
        //trim cookie
        document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        setUser({
            loggedIn: false
        })
    }

    useEffect(() => {
        const token = getCookie('x-auth-token')

        if (!token) {
            logOut()
            setLoading(false)
            return
        }

        //fetch to REST API
        fetch('http://localhost:9999/api/user/verify', {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(promise => {
            console.log('Promise', promise)
            return promise.json()
        }).then(response => {
            if (response.status) {
                logIn({
                    username: response.user.username,
                    id: response.user._id
                })
            } else {
                logOut()
            }
            //we stopped the loading
            setLoading(false)
        })

    },[]) //we got array to implement only 1 time

    //with this conditional header render everything correct(we don't see login and register reload and then profile and share your thought)
    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        //with 1 {} mean it is JSX , so we avoid it
        <UserContext.Provider value={{
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


//without hooks
// class App extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             loggedIn: null,
//             user: null
//         }
//     }

//     logIn = (user) => {
//         this.setState({
//             loggedIn: true,
//             user
//         })
//     }

//     logOut = () => {
//         //trim cookie
//         document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
//         this.setState({
//             loggedIn: false,
//             user: null
//         })
//     }

//     componentDidMount() {
//         const token = getCookie('x-auth-token')
//         console.log('Token', token)

//         if (!token) {
//             this.logOut()
//             return
//         }
//         //fetch to REST API
//         fetch('http://localhost:9999/api/user/verify', {
//             method: 'POST',
//             body: JSON.stringify({
//                 token
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(promise => {
//             console.log('Promise', promise)
//             return promise.json()
//         }).then(response => {
//             if (response.status) {
//                 this.logIn({
//                     username: response.username,
//                     id: response.user._id
//                 })
//             } else {
//                 this.logOut()
//             }
//         })

//     }



//     render() {
//         const {
//             loggedIn,
//             user
//         } = this.state

//         if (loggedIn === null) {
//             return (<div>Loading...</div>)
//         }

//         return (
//             //with 1 {} mean it is JSX , so we avoid it
//             <UserContext.Provider value={{
//                 loggedIn,
//                 user,
//                 logIn: this.logIn,
//                 logOut: this.logOut
//             }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }



// changeLoggedIn = () => {
//     this.setState({
//         loggedIn: !this.state.loggedIn
//     })
// }


export default App
