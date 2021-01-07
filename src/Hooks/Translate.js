import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Arabics',
        value: 'ar'
    },
    {
        label: 'hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value )} />
                </div>
            </div>
            <Dropdown
            label="Select a Language"
             options={options}
             onSelectedChange={setLanguage}
             selected={language}/>

             <hr />
             <h3 className="ui header">Output</h3>
             <Convert  text={text} language={language}/>
        </div>
    )

}
export default Translate;
