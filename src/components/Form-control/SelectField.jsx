import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { Controller } from "react-hook-form";

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    size: PropTypes.string,
};

SelectField.defaultProps = {
    label: "",
    disabled: false,
    options: [],
    size: "",
}

function SelectField(props) {
    const { label, form, name, onChange, disabled, options, size } = props

    const [value, setValue] = useState(options[0].name)

    const handleChange = (newValue) => {
        setValue(newValue)
        onChange(newValue);
    }
    return (
        <>
            <Controller
                control={form.control}
                name={name}
                render={({ field }) => (
                    <Select
                        {...field}
                        size={size}
                        defaultValue={label}
                        value={value}
                        disabled={disabled}
                        onChange={handleChange}
                        style={{ minWidth: '160px' }}
                    >
                        {options.map((option, index) => (
                            <Select.Option key={index} value={option.value}>{option.name}</Select.Option>
                        ))}
                    </Select>
                )}
            />

        </>
    );
}

export default SelectField;