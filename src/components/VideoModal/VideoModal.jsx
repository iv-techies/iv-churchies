import React from 'react';
import Button from "../Buttons";
import classes from "./VideoModal.module.css";

function VideoModal ( { src, isOpen, closeVideo } ) 
{
    const styles = isOpen ? classes.VideoModal : classes.Visible;


    return (
        <div className={ styles }>
            <section className={ classes.VideoContent }>
                <Button radius="4px" onClick={ closeVideo }>X</Button>

                <video controls autoPlay src={ src }>
                    Your browser cannot play this video
           </video>

            </section>


        </div>
    );
}

export default VideoModal;
