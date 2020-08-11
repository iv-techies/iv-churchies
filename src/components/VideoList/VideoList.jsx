import React from 'react';
import styled from "styled-components";
import { formatDate } from "../../utils";
import Flexbox from "../Flexbox";
import Thumbnail from "../Thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import classes from "./VideoList.module.css";

function FakeVideo ( { src, creator, date, title, playVideo, thumbnail } )
{

    return (
        <div className={ classes.FakeVideo }>

            <Thumbnail onClick={ playVideo.bind( null, src ) } thumb={ thumbnail }>
                <FontAwesomeIcon icon={ faPlayCircle } />
            </Thumbnail>

            <p className={ classes.Title }>{ title }</p>
            <p className={ classes.Details }> { creator } | { formatDate( date ) } </p>

        </div>
    );
}

const CustomFlex = styled( Flexbox )`
    @media screen and (min-width:768px)
    {
         flex-direction:row;
         justify-content:space-between
    }
`;

function VideoList ( { videos, playVideo } ) 
{
    return (
        <CustomFlex >

            {
                videos.map( ( video, i ) => <FakeVideo
                    key={ `${ video.id }-${ i }` }
                    src={ video.src }
                    creator={ video.creator }
                    date={ video.createdAt }
                    title={ video.title }
                    playVideo={ playVideo }
                    thumbnail={ video.thumbnail }
                /> )
            }

        </CustomFlex>
    );
}

export default VideoList;
