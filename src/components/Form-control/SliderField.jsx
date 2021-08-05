import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Slider } from 'antd';

SliderField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
};

SliderField.defaultProps = {
    label: "",
    disabled: false,
    min: 0,
    max: 0,
    step: 100,
}

function SliderField(props) {
    const {form, name, onChange, disabled, size, min, max, step } = props
    const slider = useRef([])
    

    const onChangeValue = (value) => {
        //code here
    }

    const onAfterChange = (value) => {
        if(onChange){
            onChange(value[0], value[1])
        }
    }

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field }) => (
                    <Slider
                        range
                        size={size}
                        step={step}
                        min={min}
                        max={max}
                        defaultValue={[min, max]}
                        onChange={onChangeValue}
                        disabled={disabled}
                        onAfterChange={onAfterChange}
                        ref={slider}
                    />
                )}
            />
        </div>
    );
}

export default SliderField;