import React from 'react';

function SelectBox({options, name, defaultValue, onChange}) {

    return (
        <select name={name} onChange={onChange} defaultValue={defaultValue}>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.lable}
                </option>
            ))}
        </select>
    );
}

export default React.memo(SelectBox);