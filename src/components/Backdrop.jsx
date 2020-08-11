import React from 'react';
import styled from 'styled-components';

const Bkdrp = styled.div`   
 position:fixed;
 width:100vw;
 height:100vh;
 z-index:${props => props.z };
 background:rgba(0,0,0,0.3);
 top:0;
 left:0;
 display:${props => props.willShow ? "block" : "none" } 

`;

export default function Backdrop ( { toggle, show } ) 
{

    return (
        <Bkdrp willShow={ show } onClick={ toggle } ></Bkdrp>
    );
}

