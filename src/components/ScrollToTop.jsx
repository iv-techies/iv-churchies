import React, { useEffect } from 'react';

function ScrollToTop ( { props } ) 
{

    useEffect( () =>
    {
        window.scrollTo( 0, 0 );
    } );

    return (
        <>

        </>
    );
}

export default ScrollToTop;
