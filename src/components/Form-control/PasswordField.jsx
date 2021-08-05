import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};


PasswordField.defaultProps = {
    label: "",
    disabled: false,
};

function PasswordField(props) {
    const { form, name, disabled, label } = props
    const { formState: { errors } } = form
    const hasError = errors[name]

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <Form.Item  {...field} label={label} name={name} validateStatus={hasError? "error": "success"} help={hasError?.message} style={{ width: "100%" }}>
                            <Input.Password {...field} label={label} disabled={disabled} />
                        </Form.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default PasswordField;