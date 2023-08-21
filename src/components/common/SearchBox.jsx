import React from 'react';
import SelectBox from './SelectBox';
import styles from '../../css/common/Search.module.css';

function SearchBox({children, options, inputs, onChange, onSearch}) {
    return (
        <div className={styles.Box}>
            {children}
            <SelectBox 
                name={'type'}
                options={options} 
                defaultValue={inputs.type} 
                onChange={onChange}
            />
            <input 
                name="keyword"
                placeholder=""
                onChange={onChange}
                value={inputs.keyword}
            />
            <button onClick={() => onSearch(inputs)}>검색</button>
        </div>

    );
}
export default React.memo(SearchBox);