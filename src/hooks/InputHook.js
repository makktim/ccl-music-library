import {useState} from 'react';

export default function(initial='', placeholder = 'inputfield', type="text") {

    const [value, setValue] = useState(initial);

    let onChange = (e) => {
        setValue(e.target.value);
    };


    return {
        value,
        onChange,
        required:true,
        type,
        placeholder
    }
}