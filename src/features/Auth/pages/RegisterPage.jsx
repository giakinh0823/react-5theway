import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../AuthSlice';
import Register from '../components/Register';

RegisterPage.propTypes = {

};

function RegisterPage(props) {

    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        try {
            console.log(values)
            const actions = register(values)
            await dispatch(actions)
        } catch (error) {
            
        }
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