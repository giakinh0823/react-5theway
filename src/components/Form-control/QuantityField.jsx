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
};

QuantityField.defaultProps = {
    label: "",
    disabled: false,
};

function QuantityField(props) {
    const { form, name, disabled } = props
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
                            onClick={() => setValue(field.name,  Number.parseInt(field.value)<=1 ? 1: Number.parseInt(field.value) - 1)}
                            style={{ height: "100%"}}
                        />
                        <Input.Group size="large" style={{ width: "70px", textAlign: "center" }}>
                            <Input {...field} disabled={disabled} defaultValue={""} />
                        </Input.Group>
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={() => setValue(field.name,  Number.parseInt(field.value) + 1)}
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