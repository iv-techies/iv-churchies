const formatDate = date =>
{
    const month = new Date( date ).toLocaleString( undefined, { month: "long" } );
    const day = new Date( date ).getDate().toString().padStart( 2, "0" );
    const year = new Date( date ).getFullYear();

    const formattedDate = `${ month } ${ day }, ${ year }`;

    if ( formattedDate.indexOf( "Invalid" ) < 0 )
    {
        return formattedDate;
    }

    return false;

};

const shortDate = date =>
{
    date = new Date( date ).toLocaleDateString();

    if ( date.indexOf( "Invalid" ) < 0 )
    {
        return date;
    }

    return false;
};


const isNotEmpty = value => value.trim() !== '';

const satisfyLength = config => value =>
{
    let isValid = true;
    if ( config.min )
    {
        isValid = isValid && value.trim().length >= config.min;
    }
    if ( config.max )
    {
        isValid = isValid && value.trim().length <= config.max;
    }
    return isValid;
};

/**
 * Generate the configuration for all input fields
 * @param {Object} Configuration 
 * Possible values are (All are optional) :
 * label - Label of input field, 
 * type - Type of input (eg textarea, select, radio,etc), default is text, 
 * mode -Specify inputMode of field, 
 * name, 
 * id, 
 * errMsg, 
 * validators - An array of functions to check validity of field value, 
 * options - For fields that can accept mutiple values (eg select, checkbox,radio), an array of values
 * 
 * @returns An object with field configuration values
 */
const generateFormField = ( { label, type = "text", mode = "text", name, id, errMsg, validators, options } ) =>
{
    return {
        id,
        label,
        type,
        mode,
        name,
        errMsg,
        options,
        value: "",
        validators,
        valid: false,

    };
};


export
{
    formatDate,
    shortDate,
    isNotEmpty,
    satisfyLength,
    generateFormField
};

