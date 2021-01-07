import React, { useState } from 'react';
import Accordian from './Accordion'
import Dropdown from './Dropdown';
import Search from './search'
import Translate from './Translate'
import Route from './Route' 
import Header from './Header'


 const items = [
    {
        title:'what is react',
        content:'react is a javascript framework'
    },
    {
        title:'why use react',
        content:'react use for engineers'
    },
    {
        title:'hows react',
        content:'it is goooooooood'
    }
] 
const options = [
    {
        label:'the color red',
        value:'red'
    },
    {
        label:'the color blue',
        value:'blue'
    },
    {
        label:'this is green',
        value:'green'
    }
]

const Hook = () => {
    const [selected, setSelected] = useState(options[0])
    return(
        <div>
            <Header />
            <Route path="/">
                <Accordian items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                label="select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
        )
}
export default Hook;