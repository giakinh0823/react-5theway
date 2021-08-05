import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

PasswordConfirmField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    dependencies: PropTypes.string,
};


PasswordConfirmField.defaultProps = {
    label: "",
    dependencies: "",
    disabled: false,
};

function PasswordConfirmField(props) {
    const { form, name, disabled, label,dependencies } = props
    const { formState: { errors } } = form
    const hasError = errors[name]

    return (
        <div>
            <div style={{display: "flex", alignItems: "center"}}>
                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <Form.Item label={label} name={name} dependencies={[dependencies]} rules={[{ required: true, message: hasError?.message }]} style={{ width: "100%"}}>
                            <Input.Password {...field} disabled={disabled} />
                        </Form.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default PasswordConfirmField;