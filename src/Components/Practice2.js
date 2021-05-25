import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Practice2(props) {
    const [users, setUsers] = useState([])
    useEffect(() =>{
       axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res =>{
            setUsers(res.data)
            console.log(res.data)
        })
        .catch(err =>{
            console.log("Error",err)
        })
        // .then(
        //     console.log('Always runs')
        // )
    }, [])
    return (
        <div>
            <h2>Practice2</h2>
                <div>
                {users.map(user =>(
                    <p key={user.id}>`{user.name} and {user.username}` </p>
                ))}
                </div>
        </div>
    );
}

export default Practice2;