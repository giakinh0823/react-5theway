import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};


InputField.defaultProps = {
    label: "",
    disabled: false,
};

function InputField(props) {
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
                        <Form.Item label={label} name={name}  validateStatus={hasError? "error": "success"} help={hasError?.message} style={{ width: "100%"}}>
                            <Input {...field} disabled={disabled} />
                        </Form.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default InputField;