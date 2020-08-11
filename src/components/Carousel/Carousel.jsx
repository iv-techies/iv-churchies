import React from 'react';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumb1 from "../../assets/images/zachary-nelson-98Elr-LIvD8-unsplash 1 .png";
import thumb2 from "../../assets/images/melissa-askew-tSlvoSZK77c-unsplash 1 .png";
import thumb3 from "../../assets/images/rayul-_M6gy9oHgII-unsplash 1 .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css";

const Slide = styled.div`
     background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--lightOrange);
    background-image:url("${props => props.img }");
    height:100%;
    width:100%;
`;

const Arrow = ( { left, onClick, className } ) =>
{
    if ( left )
    {
        return <FontAwesomeIcon className={ className } onClick={ onClick } icon={ faChevronLeft } />;
    }

    return <FontAwesomeIcon className={ className } onClick={ onClick } icon={ faChevronRight } />;

};

function Carousel () 
{
    const settings =
    {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow left />
    };

    return (
        <Slider className="Carousel" { ...settings }>
            <Slide img={ thumb1 }></Slide>
            <Slide img={ thumb2 }></Slide>
            <Slide img={ thumb3 }></Slide>

        </Slider>
    );
}

export default Carousel;
