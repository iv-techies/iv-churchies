import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Flexbox from "../Flexbox";
import Backdrop from "../Backdrop";
import classes from "./NavBar.module.css";

const routes =
    [
        {
            route: "/about",
            text: "About"
        },
        {
            route: "/watch",
            text: "Watch"
        },
        {
            route: "/resources",
            text: "Resources"
        },
        {
            route: "/connect",
            text: "Connect"
        }
    ];

const Nav = styled( Flexbox )`
@media screen and (max-width:767px)
{
    flex-direction:column;
    align-content:flex-start
}
`;


function NavBar ()
{
    const [ showNav, setShowNav ] = useState( false );

    const toggleNav = () =>
    {
        if ( window.innerWidth < 768 )
        {
            setShowNav( !showNav );
        }
    };

    //remove backdrop on resize to large screens
    useEffect( () =>
    {
        const resizeHandler = () =>
        {
            const width = window.innerWidth;


            if ( width >= 768 )
            {
                setShowNav( false );
            }
        };

        window.addEventListener( "resize",
            resizeHandler );
        return () =>
        {
            window.removeEventListener( "resize",
                resizeHandler );
        };
    }, [ showNav ] );




    const menu = !showNav ? classes.Menu : [ classes.Menu, classes.Show ].join( " " );

    const ctrl = !showNav ? classes.MenuCtrl : [ classes.MenuCtrl, classes.Rotate ].join( " " );

    return (
        <>
            <Nav as="nav" className={ classes.NavBar } justify="space-between">


                <Backdrop z="12" toggle={ toggleNav } show={ showNav } />

                <NavLink className={ classes.Logo } to="/">iV-churchies</NavLink>

                <Nav onClick={ toggleNav } justify="space-evenly" as="ul" className={ menu }>
                    {

                        routes.map( route => <li key={ route.route }><NavLink activeClassName={ classes.Active } to={ route.route }>{ route.text }</NavLink></li> )
                    }
                </Nav>

            </Nav>
            <button onClick={ toggleNav } className={ ctrl }>
                &lArr;
            </button>
        </>
    );
}

export default NavBar;
