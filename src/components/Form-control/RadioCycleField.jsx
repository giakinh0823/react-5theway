import { LoadingOutlined } from '@ant-design/icons';
import { Radio, Spin } from 'antd';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import classes from './RadioCycleField.module.scss';

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

    const {  form, name, disabled, options } = props
    const { formState: { errors }, setValue } = form
    const hasError = errors[name]
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin/>;


    const onChangeRadio = (name, e) => {
        setValue(name, e.target.value)
    }

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field }) => (
                    <>
                        <Radio.Group {...field} disabled={disabled} onChange={(e) => onChangeRadio(field.name, e)} value={field.value} defaultValue={""} className={classes.radio}>
                            {options.map((option, index) => (
                                <Radio.Button key={index} value={option.value} className={classes.button}>{option.name ? option.name :  <Spin indicator={antIcon}/>}</Radio.Button>
                            ))}
                        </Radio.Group>
                        <Text type="danger">{hasError?.message}</Text>
                    </>
                )}
            />
        </div>
    );
}

export default RadioCycleField;