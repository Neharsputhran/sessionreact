import React from 'react'
import Greeting from './Greeting';

function ParentComponent() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
        </div>
    );
}

export default ParentComponent