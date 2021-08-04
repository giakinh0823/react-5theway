import { Row, Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../../../utils/common';
import classes from './ProductInfo.module.scss';

ProductInfo.propTypes = {
    product: PropTypes.object,
    service: PropTypes.string,
    category: PropTypes.string,
};

ProductInfo.defaultProps = {
    product: {},
    service: "",
    category: "",
}

function ProductInfo(props) {
    const { Title } = Typography
    const { product, category, service } = props

    return (
        <div className={classes.root}>
            <Row>
                <Text style={{ color: "red", fontSize: "20px" }} type="secondary">{service}</Text>
            </Row>
            <Row>
                <Title level={2} style={{ margin: 0 }}>{product.title}</Title>
            </Row>
            <Row>
                <Text style={{ fontSize: "20px" }}>{category}</Text>
            </Row>
            <Row style={{ margin: "10px 0 0 0" }}>
                <Text style={{ fontSize: "24px", fontWeight: "600" }}>{formatPrice(product.price)}</Text>
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
        </div>
    );
}

export default ProductInfo;