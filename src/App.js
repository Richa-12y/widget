import React from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";

export default () => {

    const items = [
        {
            title: 'What is React?',
            content: 'React is frontend javascript framework'
        },
        {
            title: 'What is Callback?',
            content: 'A callback is a plain JavaScript function passed to some method as an argument or option'
        },
        {
            title: 'What are the features of JavaScript?',
            content: 'It is a lightweight, interpreted programming language.'
        }
    ];
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
}