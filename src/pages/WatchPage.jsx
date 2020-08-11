import React from 'react';
import videos from "../data";
import Watch from "./Watch/Watch";

function Catholic ( props ) 
{
    const type = props.match.params.type || "catholic";

    return (
        <Watch videos={ videos } churchType={ type } />
    );
}

export default Catholic;
