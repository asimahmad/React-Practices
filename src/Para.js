import React, { useEffect, useRef, useState } from 'react';

function Para(props) {
    const [update, setUpdate] = useState(false);
    const [data, setData] = useState('');
    const ref = useRef(null);

    useEffect(()=>{
        ref.current.focus();
    }, [update])
 
        return (
        <div>
            <a onClick={()=>setUpdate(true)} style={{cursor:'pointer', marginTop:'10rem'}}>Click me</a>
            {update?(<p> I am the paragraph.</p>):''}
            <input  type="text" ref={ref} onChange={(event)=> setData(event.target.value)}/>
            <p style={{alignItems:'center',wordWrap:"break-word"}}>{data}</p>
        </div>
    );
}

export default Para;