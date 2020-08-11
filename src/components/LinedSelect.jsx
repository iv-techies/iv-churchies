import React from 'react';
import styled from 'styled-components';

const Select = styled.div`   
    text-align: start;
    font-size: 1.2rem;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--orange);

    & label
    {
        padding-right: 20px;
        display: inline-block;
        margin-bottom: 10px;
    }

    & select
    {
        width:40vw;
        min-width: 280px;
        max-width: 300px;
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        
    }

`;

export default function DropDwn ( { toggle, show } ) 
{

    return (
        <Select>
            <label htmlFor="category">
                Browse by Category
                    </label>
            <select name="category" id="category">
                <option value="">Select</option>
            </select>
        </Select>
    );
}

