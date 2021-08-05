import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    onSubmit: PropTypes.func
};

function Register(props) {
    const {onSubmit} = props
    return (
        <div>
            <Row style={{ padding: "0 0 32px 0", justifyContent: "center" }}>
                <Text style={{ fontSize: "30px" }}>Đăng ký</Text>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <RegisterForm onSubmit={onSubmit}/>
            </Row>
        </div>
    );
}

export default Register;