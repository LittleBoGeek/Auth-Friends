 import React,{ useState, useEffect} from 'react'
 import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriends from "./AddFriends"

 function Friends(props) {
     const [friends, setFriends] = useState([])
     const getData = () => {
         axiosWithAuth.get('/friends')
         .then(res => {
             setFriends(res.data)
             console.log(res.data)
         })
         .catch((err) => { console.log(err)})
     }
     useEffect(() => {
         getData()
     }, [])

    return (
 <div>
 <AddFriends />
 {friends.map(friend => (
     <FriendsList name={friend.name} age={friend.age} email={friend.email}/>
 ))}

        </div>
    )
}

const FriendsList = (props) => {
    return (
        <div>
            <h1>name: {props.name}</h1>
            <h1> age: {props.age}</h1>
            <h1>email: {props.email}</h1>
        </div>
    )
}

export default Friends