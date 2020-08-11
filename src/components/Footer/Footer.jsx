import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Flexbox from "../Flexbox";
import FooterList from "./FooterList";
import classes from "./Footer.module.css";

const footerLinks =
    [
        {
            header: "visit",
            links:
                [
                    {
                        route: "/locations",
                        text: "Locations"
                    },
                    {
                        route: "/pastors",
                        text: "Our Pastors"
                    },
                    {
                        route: "/churches",
                        text: "Our Churches"
                    },
                    {
                        route: "/stories",
                        text: "Stories"
                    }
                ]
        },
        {

            header: "connect",
            links:
                [
                    {
                        route: "/small-groups",
                        text: "Small Groups"
                    },
                    {
                        route: "/ministries",
                        text: "Ministries"
                    },
                    {
                        route: "/explore",
                        text: "Explore"
                    },
                    {
                        route: "/services",
                        text: "Services"
                    }
                ]
        },
        {
            header: "grow",
            links:
                [
                    {
                        route: "/sermons",
                        text: "Sermon"
                    },
                    {
                        route: "/sunday-school",
                        text: "Sunday School"
                    },
                    {
                        route: "/meetings",
                        text: "Meetings"
                    },
                    {
                        route: "/quizzes",
                        text: "Quizzes"
                    }
                ]
        }
    ];

function Footer ()
{
    return (
        <footer className={ classes.Footer }>

            <h3>iV-churchies</h3>
            <div className={ classes.Line }></div>

            <Flexbox as="nav" justify="space-between">
                {

                    footerLinks.map( section => <FooterList key={ section.header } header={ section.header } links={ section.links } /> )

                }

                <section className={ classes.Social }>

                    <Flexbox>
                        <span>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={ faFacebookSquare } />
                            </a>

                        </span>
                        <span>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={ faTwitter } />
                            </a>

                        </span>
                        <span>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={ faInstagram } />
                            </a>
                        </span>
                    </Flexbox>

                    <Link to="/">Terms and Conditions</Link>
                </section>

            </Flexbox>

            <p className={ classes.CopyRight }>
                &copy; COPYRIGHT IV-TECHIES { new Date().getFullYear() }
            </p>

        </footer>
    );
}

export default Footer;
