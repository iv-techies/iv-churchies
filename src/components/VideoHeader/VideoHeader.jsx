import React from 'react';
import { formatDate } from "../../utils";
import classes from "./VideoHeader.module.css";

function VideoHeader ( { autoPlay, src, creator, date, title, className } ) 
{
    date = formatDate( date ) || null;

    return (
        <div className={ [ classes.Video, className ].join( " " ) }>

            <video autoPlay={ autoPlay } src={ src } controls>
                Your browser cannot play this video
            </video>


            { date ? <>
                <p className={ classes.Title }>{ title }</p>
                <p className={ classes.Details }> { creator } | { date } </p>
            </> : null }



        </div>
    );
}

export default VideoHeader;
