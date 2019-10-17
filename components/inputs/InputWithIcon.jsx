import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Error, StyledInput } from './styles';


const InputWithIcon = styled(({
    id,
    name,
    value,
    placeholder,
    hasError,
    isTouched,
    hintText,
    type,
    onChange,
    disabled,
    className
}) => {
    const error = isTouched && hasError;
    return (
        <div className={className}>
            <StyledInput
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                error={error}
            />
            {hintText && <Text>{hintText}</Text>}
            {error && <Error>{error}</Error>}
        </div>
    )
})``
InputWithIcon.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    hintText: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};
export default {
    InputWithIcon
};