import {
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Button, Card, Image, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../../utils/common';
import { addToCart } from '../../../Cart/CartSlice';
import ModelDetail from './ModelDetail';
import classes from './Product.module.scss'

Product.propTypes = {
    product: PropTypes.object,
    category: PropTypes.string,
    service: PropTypes.string,
};

Product.defaultProps = {
    product: {},
    category: "",
    service: "",
}

function Product(props) {
    const { product, category, service } = props
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const addToCartHandle = () => {
        const action = addToCart({
            id: product.id,
            product: product,
            quantity: 1,
            size: 2,
        })
        dispatch(action)
    }
    return (
        <div>
            <Card
                hoverable
                style={{ width: "100%" }}
                cover={<Image alt="example" src={product.image} />}
            >
                <Row style={{ display: "flex", flexDirection: "column" }} onClick={() => showModal()}>
                    <Row>
                        <Text type="secondary">{service}</Text>
                    </Row>
                    <Row>
                        <Link className={classes.link} to={`/products/${product.id}`}>
                            <Text>{product.title}</Text>
                        </Link>
                    </Row>
                    <Row>
                        <Text type="secondary">{category}</Text>
                    </Row>
                    <Row>
                        <Text style={{ color: "red" }}>{formatPrice(product.price)}</Text>
                    </Row>
                </Row>
                <Row style={{ margin: "10px 0 0 0" }}>
                    <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size="medium" onClick={() => addToCartHandle()}>
                        Mua ngay
                    </Button>
                </Row>
            </Card>
            <ModelDetail handleOk={handleOk} handleCancel={handleCancel} product={product} isModalVisible={isModalVisible} service={service} category={category} />
        </div>
    );
}

export default Product;