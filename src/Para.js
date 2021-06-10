import React, { useEffect, useRef, useState } from 'react';

function Para(props) {
    const [update, setUpdate] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        ref.current.focus();
    }, [update])
 
        return (
        <div>
            <a onClick={()=>setUpdate(true)} style={{cursor:'pointer', marginTop:'10rem'}}>Click me</a>
            {update?(<p> I am the paragraph.</p>):''}
            <input  type="text" ref={ref}/>
        </div>
    );
}

export default Para;