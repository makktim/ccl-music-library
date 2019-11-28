import {useState} from 'react';

export default function(initial='', placeholder = 'inputfield') {

    const [value, setValue] = useState(initial);

    let onChange = (e) => {
        setValue(e.target.value);
    };


    return {
        value,
        onChange,
        required:true,
        type:"text",
        placeholder
    }
}