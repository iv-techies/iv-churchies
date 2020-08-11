import React from 'react';
import classes from "./Input.module.css";

function Input ( { label, type, mode, value, name, id, changeHandler, options, autofocus } )
{
    let field;

    switch ( type ) 
    {
        case "select":

            field = (
                <select
                    autoFocus={ autofocus } name={ name }
                    id={ id || name } className={ [ classes.Input ].join( " " ) }
                >

                    <option selected value="">Choose</option>
                    {
                        options.map( ( opt, i ) => 
                        {
                            return <option key={ `${ i }${ opt.value }` } value={ opt.value }>{ opt.text }</option>;
                        } )
                    }

                </select> );

            break;

        case "textarea":
            field = (
                <textarea autoFocus={ autofocus }
                    id={ id || name }
                    name={ name }
                    value={ value }
                    onChange={ changeHandler }
                    className={ [ classes.Input, classes.TextArea
                    ].join( " " ) }
                    placeholder="Type here..."
                /> );
            break;

        default:
            field = ( <input autoFocus={ autofocus }
                type={ type }
                inputMode={ mode }
                value={ value }
                name={ name }
                id={ id || name }
                onChange={ changeHandler }
                className={ [ classes.Input, classes.Text ].join( " " ) }
            /> );
            break;
    }

    return (
        <div className={ classes.Field }>
            { label && <label htmlFor={ name }>{ label }</label> }
            { field }


        </div>

    );
}

export default Input;
