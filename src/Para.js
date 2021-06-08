import React, { useState } from 'react';

function Para(props) {
    const [update, setUpdate] = useState(false);
    return (
        <div>
            <a onClick={()=>setUpdate(true)} style={{cursor:'pointer', marginTop:'10rem'}}>Click me</a>
            {update?(<p> I am the paragraph.</p>):''}
        </div>
    );
}

export default Para;