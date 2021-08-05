import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../utils/common';
import { cartItemsTotalSelector } from '../CartSelector';

CartTotal.propTypes = {

};

function CartTotal(props) {
    const total = useSelector(cartItemsTotalSelector)
    return (
        <div>
            <Row style={{ borderBottom: "1px solid #333", padding: "0 0 10px 0" }}>
                <Text style={{ fontSize: "20px" }}>Cộng giỏ hàng</Text>
            </Row>
            <div style={{ borderBottom: "1px solid #333", padding: "10px 0" }}>
                <Row style={{ padding: "5px 0" }}>
                    <div style={{ margin: "0 auto 0 0" }}>
                        <Text style={{ fontSize: "16px" }}>Tạm tính</Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: "16px", fontWeight: "600" }}>{formatPrice(total)}</Text>
                    </div>
                </Row>
                <Row style={{ padding: "5px 0" }}>
                    <div style={{ margin: "0 auto 0 0" }}>
                        <Text style={{ fontSize: "16px" }}>Giao hàng</Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: "16px" }}>Tính phí giao hàng</Text>
                    </div>
                </Row>
                <Row style={{ padding: "5px 0" }}>
                    <div style={{ margin: "0 auto 0 0" }}>
                        <Text style={{ fontSize: "16px" }}>Phí ship hàng</Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: "16px", fontWeight: "600" }}>{formatPrice(35000)}</Text>
                    </div>
                </Row>
            </div>
            <div style={{ borderBottom: "1px solid #333", padding: "10px 0" }}>
                <Row style={{ padding: "5px 0" }}>
                    <div style={{ margin: "0 auto 0 0" }}>
                        <Text style={{ fontSize: "18px", fontWeight: "600" }}>Tổng</Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: "16px", fontWeight: "600" }}>{formatPrice(total + 35000)}</Text>
                    </div>
                </Row>
            </div>
            <Row style={{ margin: "20px 0 0 0" }}>
                <Button style={{ width: "400px" }} htmlType="submit" type="primary" shape="round" icon={<ShoppingCartOutlined />} size="large">
                    Thanh toán ngay
                </Button>
            </Row>
        </div>
    );
}

export default CartTotal;