import React, { useState, useEffect } from 'react';
import videos from "../../data";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/Buttons";
import Flexbox from "../../components/Flexbox";
import LinedHeader from "../../components/LinedHeader";
import VideoList from "../../components/VideoList/VideoList";
import VideoModal from "../../components/VideoModal/VideoModal";
import ScrollToTop from "../../components/ScrollToTop";

import classes from "./Home.module.css";

function Home () 
{

    const [ isVideoOpen, setIsVideoOpen ] = useState( false );
    const [ activeVideo, setActiveVideo ] = useState( null );

    const toggleVideoOpen = () =>
    {
        setIsVideoOpen( !isVideoOpen );

    };

    const setVideoSrc = src =>
    {
        setActiveVideo( src );
        toggleVideoOpen();

    };

    const closeVideo = () =>
    {
        setVideoSrc( null );
    };

    useEffect( () =>
    {
        const escapeClose = ( event ) =>
        {
            if ( event.key === "Escape" && isVideoOpen )
            {
                closeVideo();
            }
        };

        window.addEventListener( 'keydown', escapeClose );
        return () =>
        {
            window.removeEventListener( 'keydown', escapeClose );
        };
    } );

    return (
        <>
            <ScrollToTop />
            <Hero>

                <Carousel />
                <Button className={ classes.HeroBtn } case="capitalize">Learn More</Button>

            </Hero>
            <Main>

                <LinedHeader mini>
                    the best news
                </LinedHeader>

                <p className={ classes.PreviewText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                <Flexbox justify="space-between">
                    <LinedHeader>
                        sermon
                    </LinedHeader>

                    <Button>View More</Button>
                </Flexbox>

                <VideoList playVideo={ setVideoSrc } videos={ videos } />


                <Flexbox justify="space-between">
                    <LinedHeader>
                        sunday school
                    </LinedHeader>

                    <Button>View More</Button>
                </Flexbox>

                <VideoList playVideo={ setVideoSrc } videos={ videos } />


            </Main>

            <VideoModal src={ activeVideo } isOpen={ isVideoOpen } closeVideo={ closeVideo } />
        </>
    );
}

export default Home;
