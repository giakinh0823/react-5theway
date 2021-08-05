import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import classes from './QuantityField.module.scss';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue:  PropTypes.number,
};

QuantityField.defaultProps = {
    label: "",
    disabled: false,
    defaultValue: 0,
};

function QuantityField(props) {
    const { form, name, disabled, defaultValue } = props
    const { formState: { errors }, setValue } = form
    const hasError = errors[name]

    return (
        <div className={classes.root}>
            <Controller
               control={form.control}
               name={name}
               render={({ field }) => (
                    <>
                        <Button
                            type="primary"
                            icon={<MinusOutlined />}
                            onClick={() => {
                                if(field.value===undefined) field.value= Number.parseInt(defaultValue)
                                setValue(field.name,  Number.parseInt(field.value)<=1 ? 1: Number.parseInt(field.value) - 1)
                            }}
                            style={{ height: "100%"}}
                        />
                        <Input.Group size="large" style={{ width: "70px", textAlign: "center" }}>
                            <Input {...field} disabled={disabled} defaultValue={Number.parseInt(defaultValue)} />
                        </Input.Group>
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={() => {
                                if(field.value===undefined) field.value= Number.parseInt(defaultValue)
                                setValue(field.name,  Number.parseInt(field.value) + 1)
                            }}
                            style={{ height: "100%"}}
                        />
                        <Text type="danger" style={{marginLeft: "10px"}}>{hasError?.message}</Text>
                    </>
                )}
            />
        </div>
    );
}

export default QuantityField;