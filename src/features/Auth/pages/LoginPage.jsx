import { Col, Row } from 'antd';
import React from 'react';
import Login from '../components/Login';

LoginPage.propTypes = {

};

function LoginPage(props) {
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <div>
            <Row gutter={16} style={{padding: "0 50px", justifyContent: "center", margin: "150px 0 200px 0"}}>
                <Col xs={{span: 24}} md={{ span: 12}}>
                    <Login onSubmit={onSubmit} />
                </Col>
            </Row>
        </div>
    );
}

export default LoginPage;