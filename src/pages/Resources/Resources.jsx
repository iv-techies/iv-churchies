import React from 'react';
import { shortDate } from "../../utils";
import LinedHeader from "../../components/LinedHeader";
import Main from "../../components/Main";
import Banner from "../../components/Banner";
import classes from "./Resources.module.css";


function Resources ( { type, reading } )
{
    const date = shortDate( reading.createdAt ) || null;
    const text = reading.text.split( "\n" ).map( ( section, i ) => <p key={ i }>{ section }</p> );

    return (
        <>
            <Banner>

                <LinedHeader mini> { type } write-up </LinedHeader>

            </Banner>

            <Main>

                <div className={ classes.Grid }>

                    <aside className={ classes.Aside }>
                        <p >Date</p>
                        <p>{ date }</p>


                        <div className={ classes.Img }>
                            <img src={ reading.thumbnail } alt=" associated text pic" /></div>


                    </aside>

                    <article className={ classes.Article }>
                        <h4>Today's Reading.</h4>
                        { text }
                    </article>

                </div>

            </Main>

        </>
    );
}

export default Resources;
