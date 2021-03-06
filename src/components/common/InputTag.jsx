import React from "react";
import propTypes from 'prop-types';

const Input = props => (
  <input
    type={props.inputType}
    name={props.inputName}
    value={props.inputValue}
    placeholder={props.inputPlaceholder}
    onChange={props.inputChangeHandler}
    className={props.className}
  />
);

Input.propTypes = {
  inputName:propTypes.string,
  inputChangeHandler:propTypes.func
}

export default Input;
