import * as React from 'react';

const {useState, useEffect} = React;
function Practice1(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        //setCounter(()=>counter+1);
        document.title= counter;
        console.log('use effect')
    },[counter])

    const handleClick = () =>{
        setCounter(counter +1 )
    }
    return (
        <div>
            <p>`Counter: + {counter}`</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Practice1;