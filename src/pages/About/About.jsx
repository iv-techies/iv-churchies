import React from 'react';
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import Flexbox from "../../components/Flexbox";
import LinedHeader from "../../components/LinedHeader";
import Button from "../../components/Buttons";

import classes from "./About.module.css";


function About () 
{
    return (
        <>
            <Hero>
                <Flexbox className={ classes.HeroText }>
                    <h1  >our mission</h1>
                </Flexbox>
            </Hero>
            <Main padding="0">
                <section className={ classes.Content }>
                    <div className={ classes.Bg }></div>
                    <Flexbox as="article">
                        <LinedHeader>our values</LinedHeader>
                    </Flexbox>
                </section>

                <section className={ classes.Content }>
                    <div className={ [ classes.Bg, classes.BgRight ].join( "  " ) }></div>
                    <Flexbox as="article">
                        <LinedHeader>our beliefs</LinedHeader>
                    </Flexbox>
                </section>

                <section className={ classes.Content }>
                    <div className={ classes.Bg }></div>
                    <Flexbox as="article">
                        <LinedHeader>our vision</LinedHeader>
                    </Flexbox>
                </section>


                <div className={ classes.Action }>
                    <h2>Want to get in touch with us?</h2>
                    <Button case="capitalize" light>
                        Contact us
                </Button>
                </div>



            </Main>
        </>
    );
}

export default About;
