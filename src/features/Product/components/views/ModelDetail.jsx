import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/lib/modal/Modal';
import Text from 'antd/lib/typography/Text';
import { Button, Col, Row } from 'antd';
import ThumnailProduct from './ThumnailProduct';
import { Typography } from 'antd';
import { formatPrice } from '../../../../utils/common';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { addToCart } from '../../../Cart/CartSlice';
import { useDispatch } from 'react-redux';


ModelDetail.propTypes = {
    project: PropTypes.object,
    service: PropTypes.string,
    category: PropTypes.string,
};

ModelDetail.defaultProps = {
    project: {},
    service: "",
    category: "",
}

function ModelDetail(props) {
    const { Title } = Typography
    const { product, service, category, isModalVisible, handleOk, handleCancel } = props
    const dispatch = useDispatch();

    const addToCartHandle = () => {
        const action = addToCart({
            product: product,
            quantity: 1,
            id: product.id,
        })
        dispatch(action)
    }

    return (
        <div>
            <Modal
                title={product.title}
                width={800}
                style={{ top: 80 }}
                visible={isModalVisible}
                onOk={() => handleOk()}
                onCancel={() => handleCancel()}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <ThumnailProduct product={product} />
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Text style={{ fontSize: "16px" }} type="secondary">{service}</Text>
                        </Row>
                        <Row>
                            <Title level={4}>{product.title}</Title>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: "16px" }}>{category}</Text>
                        </Row>
                        <Row style={{ margin: "10px 0 0 0" }}>
                            <Text style={{ color: "red", fontSize: "20px" }}>{formatPrice(product.price)}</Text>
                        </Row>
                        <Row style={{ margin: "10px 0" }}>
                            <Text style={{ fontSize: "14px" }} type="secondary">
                                - Các bạn có thể mua hàng tại Web 5Theway bằng các hình thức thanh toán sau đây:
                            </Text>
                            <Text style={{ fontSize: "14px" }} type="secondary">
                                Cách 1: Thanh toán khi nhận hàng tại nhà (COD – giao hàng và thu tiền tận nơi)
                            </Text>
                            <Text style={{ fontSize: "14px" }} type="secondary">
                                Cách 2: Thanh toán chuyển khoảng trước cho 5Theway (Trước khi CHUYỂN KHOẢN các bạn vui lòng nhắn tin trước cho 5Theway qua Ins hoặc FB để chúng tôi kiểm tra và xác nhận đơn hàng.)
                            </Text>
                        </Row>
                        <Row style={{ margin: "30px 0 0 0" }}>
                            <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size="large" onClick={() => addToCartHandle()}>
                                Mua ngay
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

export default ModelDetail;