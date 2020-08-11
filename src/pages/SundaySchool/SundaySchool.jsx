import React from 'react';
import videos from "../../data";
import LinedSelect from "../../components/LinedSelect";
import VideoHeader from "../../components/VideoHeader/VideoHeader";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import LinedHeader from "../../components/LinedHeader";
import Flexbox from "../../components/Flexbox";
import Gradients from "../../components/Gradients";

import classes from "./SundaySchool.module.css";


function SundaySchool ()
{
    return (
        <>
            <Hero className={ classes.Header } as="header">

                <VideoHeader className={ classes.Video }
                    src={ videos[ 0 ].src }

                />


            </Hero>
            <Main>
                <LinedSelect />

                <div className={ classes.Level }>
                    <LinedHeader>quiz</LinedHeader>
                    <Flexbox justify="space-evenly">

                        <Gradients type="first">beginner</Gradients>
                        <Gradients>intermediate</Gradients>

                        <Gradients type="last">advanced</Gradients>
                    </Flexbox>
                </div>

                <p className={ classes.Text }>
                    Lorem ipsum dolor sit amet, deserunt hendrerit prodesset nec ut, unum maiestatis conclusionemque nec ex. Admodum perfecto platonem eum ne, est alii decore an, ei vim nusquam praesent. No eos verear voluptaria neglegentur. Utamur dignissim vel an, nec ex inani propriae atomorum.

                    </p>



                <p className={ classes.Text }> Vim rebum consul an, eu conceptam voluptatibus pro. Ea postea vocent praesent duo, alia fugit qui ne. Ad usu regione meliore intellegat, oporteat omittantur nec ad. Quo eu falli torquatos, ex utroque placerat eos
                </p>

            </Main>

        </>
    );
}

export default SundaySchool;
