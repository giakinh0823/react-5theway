import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import classes from './RadioCycleField.module.scss'
import { Controller } from 'react-hook-form';

RadioCycleField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

RadioCycleField.defaultProps = {
    label: "",
    disabled: false,
    options: [],
}

function RadioCycleField(props) {

    const { label, form, name, disabled, options } = props
    const { setValue } = form

    const onChangeRadio = (name, e) => {
        setValue(name, e.target.value)
    }

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field }) => (
                    <Radio.Group {...field} disabled={disabled} onChange={(e) =>onChangeRadio(field.name, e)} value={field.value} defaultValue={""} className={classes.radio}>
                        {options.map((option, index) => (
                            <Radio.Button key={index} value={option.value} className={classes.button}>{option.name}</Radio.Button>
                        ))}
                    </Radio.Group>
                )}
            />
        </div>
    );
}

export default RadioCycleField;