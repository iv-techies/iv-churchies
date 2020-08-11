import React, { useState } from 'react';
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import Button from "../../components/Buttons";
import LinedHeader from "../../components/LinedHeader";
import VideoList from "../../components/VideoList/VideoList";
import ScrollToTop from "../../components/ScrollToTop";
import VideoHeader from "../../components/VideoHeader/VideoHeader";
import LinedSelect from "../../components/LinedSelect";

import classes from "./Watch.module.css";



function Watch ( { churchType, videos } ) 
{
    const [ activeVideo, setActiveVideo ] = useState( videos[ 0 ] );
    const [ autoPlay, setAutoPlay ] = useState( false );

    const changeVideo = src =>
    {

        const videoToPlay = videos.find( vid => vid.src === src );

        setActiveVideo( videoToPlay );
        setAutoPlay( true );
        window.scrollTo( 0, 0 );

    };

    return (
        <>
            <ScrollToTop />

            <Hero height="70vh" className={ classes.Header } as="header">

                <LinedHeader
                    className={ classes.PageType }
                    alignV="top" as="span">
                    { churchType } <br /> sermon
                </LinedHeader>

                <VideoHeader
                    src={ activeVideo.src }
                    creator={ activeVideo.creator }
                    date={ activeVideo.createdAt }
                    title={ activeVideo.title }
                    autoPlay={ autoPlay }
                />

            </Hero>

            <Main>
                <LinedSelect />

                <p className={ classes.ViewAll } >View All <span>&#8964;</span>  </p>

                <VideoList playVideo={ changeVideo } videos={ [ ...videos, videos[ 1 ], videos[ 2 ], videos[ 0 ] ] } />

                <br />

                <Button padding="10px 30px" case="capitalize">View more</Button>
            </Main>
        </>
    );
}

export default Watch;
