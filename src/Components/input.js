import React from 'react';
import Styles from "./input.module.css"

const input = (props) => {
    return (
        <div>
            <label className={Styles.formLabel}>{props.name}</label>
            <br />
            <input className={props.T && props.Err ? Styles.uncompleted : Styles.formInput} type={props.type} name={props.name} value={props.value} onFocus={props.Touched} onChange={props.onChange} />
        </div>
    );
};

export default input;