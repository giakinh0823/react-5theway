import { Button, Form, message, Upload } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { UploadOutlined } from '@ant-design/icons';

UploadField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};


UploadField.defaultProps = {
    label: "",
    disabled: false,
};

function UploadField(props) {
    const { form, name, disabled, label } = props
    const { formState: { errors } } = form
    const hasError = errors[name]

    const propsUpload = {
        name: 'file',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <Form.Item label={label} name={name} disabled={disabled} validateStatus={hasError ? "error" : "success"} help={hasError?.message} style={{ width: "100%" }}>
                            <Upload {...field} {...propsUpload}>
                                <Button icon={<UploadOutlined />}>{label}</Button>
                            </Upload>,
                        </Form.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default UploadField;