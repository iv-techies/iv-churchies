import React, { Component, Fragment } from 'react';
import LinedHeader from "../../components/LinedHeader";
import Main from "../../components/Main";
import Banner from "../../components/Banner";
import Input from "../../components/Input/Input";
import Flexbox from "../../components/Flexbox";
import { isNotEmpty, generateFormField } from "../../utils";
import map from "../../assets/images/map.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import classes from "./Contact.module.css";

const initialForm =

    [
        generateFormField(
            {
                label: "first name",
                name: "first_name",
                errMsg: "Name field cannot be blank",
                validators: [ isNotEmpty ],
            }
        ),
        generateFormField(
            {
                label: "email address",
                type: "email",
                mode: "email",
                name: "email",
                errMsg: "Email field cannot be blank and must contain @ symbol",
                validators: [ isNotEmpty ],

            } ),
        generateFormField(
            {
                label: "subject",
                name: "subject",
                errMsg: "Subject field cannot be blank",
                validators: [ isNotEmpty ]

            } ),
        generateFormField(
            {
                label: "message",
                type: "textarea",
                name: "message",
                errMsg: "Message field cannot be blank",
                validators: [ isNotEmpty ]

            } )

    ];


class Contact extends Component 
{
    state =
        {
            formIsValid: false,
            isBeingSubmitted: false,
            fields: [ ...initialForm ]
        };

    handleChange = e =>
    {
        const target = e.target;
        const value = target.value.trim();
        const fields = [ ...this.state.fields ];

        const fieldIndex = fields.findIndex( f => f.name === target.name );

        let isValid = true;

        fields[ fieldIndex ].validators.forEach( check =>
        {
            isValid = isValid && check( value );
        } );

        fields[ fieldIndex ].value = value;
        fields[ fieldIndex ].valid = isValid;

        const { formIsValid } = this.checkAllFields();

        this.setState( { fields, formIsValid } );
    };

    submitFormHandler = e =>
    {
        e.preventDefault();
        const { values, formIsValid } = this.checkAllFields();
        this.setState( { isBeingSubmitted: true } );

        if ( formIsValid )
        {

            console.table( values );
            this.resetForm();
        }
        else
        {
            console.table( "Trash input" );

        }



    };

    checkAllFields = () =>
    {
        const values = {};
        const fields = [ ...this.state.fields ];
        let formIsValid = true;

        fields.forEach( field =>
        {
            formIsValid = formIsValid && field.valid;

            values[ field.name ] = field.value;
        } );

        return { formIsValid, values };

    };

    resetForm = () =>
    {
        this.setState(
            {
                fields: initialForm,
                isBeingSubmitted: false,
                formIsValid: false
            } );
    };

    render ()
    {
        return (
            <>
                <Banner>

                    <LinedHeader mini> Contact </LinedHeader>
                </Banner>

                <Main className={ classes.Padding }>

                    <h2 className={ classes.Formheader }>Let’s Keep in Touch</h2>

                    <Flexbox justify="space-betwwen">

                        <form onSubmit={ this.submitFormHandler } className={ classes.Form } action="" method="post">
                            {
                                this.state.fields.map( ( field, i ) => <Fragment
                                    key={ field.label }>
                                    <Input
                                        autofocus={ i === 0 ? true : false }
                                        label={ field.label }
                                        type={ field.type }
                                        mode={ field.mode }
                                        value={ field.value }
                                        name={ field.name }
                                        id={ field.id }
                                        changeHandler={ this.handleChange }
                                        options={ field.options } />
                                    <p className={ ( !field.valid && this.state.isBeingSubmitted ) ? classes.Error : classes.Hidden }>
                                        { field.errMsg }</p>
                                </Fragment> )
                            }

                            <button className={ classes.SubmitBtn } type="submit">
                                <FontAwesomeIcon icon={ faLocationArrow } />
                                Send
                            </button>
                        </form>

                        <div className={ classes.Card }>

                            <section className={ classes.Points }>

                                <p>Whatsapp</p>
                                <p>08123456789</p>

                            </section>

                            <section className={ classes.Points }>

                                <p>Email</p>
                                <p>ivtechies@gmail.com</p>

                            </section>

                            <section className={ classes.Points }>

                                <p>Working Hours</p>
                                <p>9:00am - 6:00pm Mon - Fri</p>

                                <div className={ classes.Map }>
                                    <img src={ map } alt="Map" />
                                </div>

                            </section>

                            <section className={ classes.Points }>

                                <p>Find us at</p>
                                <p>5, Lorem ipsum dolor sit amet, deserunt hendrerit prodesset nec ut. Lagos.</p>

                            </section>

                        </div>
                    </Flexbox>

                </Main>


            </>
        );
    }
}

export default Contact;
