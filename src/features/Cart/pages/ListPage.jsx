import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../CartSelector';
import CartTotal from '../components/CartTotal';
import ListCart from '../components/ListCart';

ListPage.propTypes = {

};

function ListPage(props) {
    const { Title } = Typography
    const cartItems = useSelector(cartItemsSelector)

    return (
        <div style={{ padding: "50px 60px" }}>
            <Row style={{ justifyContent: "center", marginBottom: "20px"}}>
                <Title level={1} style={{fontWeight: "100", fontSize: "60px"}}>Cart</Title>
            </Row>
            <Row gutter={24}>
                <Col span={16}>
                    <ListCart cartItems={cartItems} />
                </Col>
                <Col span={8}>
                    <CartTotal/>
                </Col>
            </Row>

        </div>
    );
}

export default ListPage;