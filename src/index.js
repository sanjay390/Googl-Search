import React from 'react';
import ReactDom from 'react-dom';
import Hook from './Hooks/hookMainPage'

ReactDom.render(
    <div>
        <Hook />
    </div>,
    document.querySelector('#root')
);