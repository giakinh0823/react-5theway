import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import Text from 'antd/lib/typography/Text';
import { Row } from 'antd';

Login.propTypes = {
    onSubmit: PropTypes.func
};

function Login(props) {
    const { onSubmit } = props

    return (
        <div style={{ width: "100%"}}>
            <Row style={{ padding: "0 0 32px 0", justifyContent: "center" }}>
                <Text style={{ fontSize: "30px" }}>Đăng nhập</Text>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <LoginForm onSubmit={onSubmit} />
            </Row>
        </div>
    );
}

export default Login;