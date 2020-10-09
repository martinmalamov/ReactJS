import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import UserContext from '../../Context';
import ErrorBoundary from '../../ErrorBoundary';

const ProfilePage = () => {
    const [username, setUsername] = useState(null)
    const [posts, setPosts] = useState(null)
    const context = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    const getData = useCallback(async () => {
        const id = params.userid
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
        if (!response.ok) {
            history.push('/error')
        }

        const user = await response.json()

        //update username and posts
        setUsername(user.username)
        setPosts(user.posts && user.posts.length)
    }, [params.userid, history])

    // if we don't want to see warning:
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // or with useCallback

    useEffect(() => {
        getData()

    }, [getData])

    if (!username) {
        return (
            <PageLayout>
                <div>
                    Loading...
                </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div>
                <p>User: {username.test.test}</p>
                <p>Posts: {posts}</p>

                <button onClick={logOut}>Logout</button>
            </div>
            <Origamis length={3} />
        </PageLayout>
    )
}

// class ProfilePage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             username: null,
//             posts: null,
//         }
//     }

//     static contextType = UserContext

//     //request to user
//     componentDidMount() {
//         this.getUser(this.props.match.params.userid)
//     }

//     getUser = async (id) => {
//         const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
//         if(!response.ok){
//             this.props.history.push('/error')
//         }

//         const user = await response.json()

//         this.setState({
//             username: user.username,
//             posts: user.posts && user.posts.length
//         })
//     }

//     logOut = ()  => {
//         this.context.logOut()
//         this.props.history.push('/')
//     }

//     render() {
//         const {
//             username, 
//             posts
//         } = this.state

//         if(!username){
//             return(
//                 <PageLayout>
//                     <div>
//                         Loading...
//                     </div>
//                 </PageLayout>
//             )
//         }

//         return (
//             <PageLayout>
//                 <div>
//                     <p>User: {username}</p>
//                     <p>Posts: {posts}</p>

//                     <button onClick={this.logOut}>Logout</button>
//                 </div>
//                 <Origamis length={3} />
//             </PageLayout>
//         )
//     }
// }

export default ProfilePage