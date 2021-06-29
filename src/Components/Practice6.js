import React from 'react';

function Practice6(props) {
    const styleObj = {
        background: 'red'
    }
    return (
        <div>
            <div id="my-div" style={styleObj,{background:'blue'}}>
                <h1>Hey there</h1>
            </div>
        </div>
);
}


export default Practice6;