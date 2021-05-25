import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Practice2(props) {
    const [count, setCount] = useState(-1)
    const [user, setUser] = useState(count)
    useEffect(() =>{
       axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res =>{
            document.title= 'Asim'
            setUser(res.data)
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
            <h2>Practice3</h2>
                <div>
                    <button onClick={()=>{
                        setCount(count+1)
                    }}>click</button>
                    <p key={user.count}>{user.name} {user.username} </p>
                </div>
        </div>
    );
}

export default Practice2;