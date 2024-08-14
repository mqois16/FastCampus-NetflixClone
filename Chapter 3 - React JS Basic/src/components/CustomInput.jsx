import { useState } from 'react';

function CustomInput({ label }) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={handleChange}
            />
        </label>
    );
}

export default CustomInput
