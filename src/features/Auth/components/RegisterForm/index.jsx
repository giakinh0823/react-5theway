import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, message } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import InputField from '../../../../components/Form-control/InputField';
import PasswordField from '../../../../components/Form-control/PasswordField';
import UploadField from '../../../../components/Form-control/UploadField';



RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {

    const { onSubmit } = props

    const schema = yup.object().shape({
        username: yup.string()
            .required("Xin vui lòng nhập username"),
        password: yup.string()
            .required("Xin vui lòng nhập mật khẩu"),
        repassword: yup.string()
            .required("Xin vui lòng nhập mật khẩu.")
            .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không đúng.'),
        email: yup.string()
            .required("Xin vui lòng nhập email.")
            .email("Xin vui lòng nhập một email"),
        first_name: yup.string()
            .required("Xin vui lòng nhập tên của bạn."),
        last_name: yup.string()
            .required("Xin vui lòng nhập tên của bạn."),
        phoneNumber: yup.number()
            .required("Xin vui lòng nhập số điện thoại"),
    });

    const form = useForm({
        defaultValue: {
            username: "",
            password: "",
            repassword: "",
            email: "",
            phoneNumber: "",
            first_name: "",
            last_name: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <div style={{ width: "100%" }}>
            <Form onFinish={form.handleSubmit(handleSubmit)}>
                <div>
                    <InputField form={form} name="first_name" label="Nhập tên" />
                </div>
                <div>
                    <InputField form={form} name="last_name" label="Nhập họ" />
                </div>
                <div>
                    <InputField form={form} name="email" label="Email" />
                </div>
                <div>
                    <InputField form={form} name="username" label="Username" />
                </div>
                <div>
                    <InputField form={form} name="phoneNumber" label="Số điện thoại" />
                </div>
                <div>
                    <PasswordField form={form} name="password" label="Mật khẩu" />
                </div>
                <div>
                    <PasswordField form={form} name="repassword" label="Xác nhận mật khẩu" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Form.Item>
                        <div>
                            <Button type="primary" htmlType="submit" shape="round" style={{ width: "200px" }}>Đăng ký</Button>
                        </div>
                        <div style={{ textAlign: "center", margin: "10px 0" }}>
                            hoặc <Link to="/auth/login">Đăng nhập ngay!</Link>
                        </div>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export default RegisterForm;