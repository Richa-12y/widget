import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('');

    useEffect(async () => {
        await axios('hgfhfhfhfh')
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                        className="input" />
                </div>
            </div>
        </div>
    )
}
export default Search;
