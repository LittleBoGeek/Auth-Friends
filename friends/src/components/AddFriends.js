import React, {useState} from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth"

const AddFriends = ({setFriendsList}) => {
    const [newFriend, setNewFriend] = useState({
        name: " ",
        age: " ",
        email:" ",
        id: Date.now()
    })
    const handleChanges = e => {
        setNewFriend({...newFriend,[e.target.name]:e.target.value});
    };

    const  handleSubmit = e => {
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => setFriendsList(res.data) )
        setNewFriend({
            name: '',
            emai:' ',
            email:' '
        });    }

        return (
            <div>
<form onSubmit={handleSubmit}>
Name: <input 
type="text"
name="name"
value={newFriend.name}
onChange={handleChanges}

/> 

Email: <input
type="text"
name="email"
value={newFriend.email}
onChange={handleChanges}
/>
Age: <input
type="text"
name="age"
value={newFriend.age}
onChange={handleChanges}
/>

<button type="submit"> Submit </button>
</form>

            </div>
        )
}

export default AddFriends