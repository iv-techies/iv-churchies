import React from 'react';
import Resources from "./Resources/Resources";
import { readings } from "../data";

function ResourcePage ( props )
{
    const type = props.match.params.type || "catholic";
    const reading = readings[ type ] || readings.catholic;

    return (
        <Resources type={ type } reading={ reading } />

    );
}

export default ResourcePage;
