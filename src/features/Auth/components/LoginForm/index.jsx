import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import InputField from '../../../../components/Form-control/InputField';
import PasswordField from '../../../../components/Form-control/PasswordField';



LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {

    const { onSubmit } = props

    const schema = yup.object().shape({
        username: yup.string().required("Xin vui lòng nhập username"),
        password: yup.string().required("Xin vui lòng nhập mật khẩu")
    });

    const form = useForm({
        defaultValue: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
    }
    return (
        <div style={{width: "100%"}}>
            <Form initialValues={{ remember: true }} onFinish={form.handleSubmit(handleSubmit)}>
                <div>
                    <InputField form={form} name="username" label="Username" />
                </div>
                <div style={{ margin: "15px 0 10px 0" }}>
                    <PasswordField form={form} name="password" label="Password" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Form.Item>
                        <div>
                            <Button type="primary" htmlType="submit" shape="round" style={{ width: "200px" }}>Đăng nhập</Button>
                        </div>
                        <div style={{textAlign: "center", margin: "10px 0"}}>
                            hoặc <Link to="/auth/register">Đăng ký ngay!</Link>
                        </div>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;