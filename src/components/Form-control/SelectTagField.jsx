import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Select } from 'antd';

SelectTagField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectTagField.defaultProps = {
    label: "",
    disabled: false,
    options: [],
}
function SelectTagField(props) {
    const { label, form, name, onChange, disabled, options } = props

    const handleChange = (value) => {
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <>
            <Controller
                control={form.control}
                name={name}
                render={({ field }) => (
                    <Select
                        {...field}
                        mode="multiple"
                        showArrow
                        style={{ width: '100%' }}
                        placeholder={label}
                        onChange={handleChange}
                        disabled={disabled}
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

export default SelectTagField;