import React from 'react';

import './Input.scss';

interface Props {
  label?: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  change?: (value: any) => void;
  value?: string;
  fill?: boolean;
}

const Input: React.SFC<Props> = ({
  label,
  type,
  required,
  disabled,
  readOnly,
  name,
  defaultValue,
  placeholder,
  value,
  change,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { validate, checkInputErrors, change } = this.props;

    // this.inputIsUntouched = false;

    if (change) {
      change(e);
    }

    // if (validate) {
    //   this.setState({ errors: validate(e.target.value) }, checkInputErrors);
    // }
  }

  return (
  <label
    className="label"
    htmlFor={name}
  >
    {label}
    <input
      name={name}
      id={name}
      type={type}
      onChange={event => handleChange(event)}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      onFocus={event => handleChange(event)}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...(value && { value })}
    />
  </label>
)};

export default Input;