import { Col, Row } from 'antd';
import React from 'react';
import Register from '../components/Register';

RegisterPage.propTypes = {

};

function RegisterPage(props) {

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <div>
            <Row gutter={16} style={{ padding: "0 50px", justifyContent: "center", margin: "60px 0 200px 0" }}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Register onSubmit={onSubmit}/>
                </Col>
            </Row>
        </div>
    );
}

export default RegisterPage;