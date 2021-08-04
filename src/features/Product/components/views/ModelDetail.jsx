import { Col, Row, Typography } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import Text from 'antd/lib/typography/Text';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useSizes from '../../../../Hooks/useData/useSizes';
import { formatPrice } from '../../../../utils/common';
import { addToCart } from '../../../Cart/CartSlice';
import AddCartForm from './AddCartForm';
import ThumnailProduct from './ThumnailProduct';


ModelDetail.propTypes = {
    project: PropTypes.object,
    service: PropTypes.string,
    category: PropTypes.string,
    handleOk:PropTypes.func,
    handleCancel: PropTypes.func,
    isModalVisible: PropTypes.bool,
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
    const {sizes} = useSizes()

    const addCart = (values) => {
        const actions = addToCart({
            id: product.id,
            product: product,
            ...values,
        })
        dispatch(actions)
    }

    const [options, setOptions] = useState([])

    const getSize = (id) => {
        const indexSize = sizes.findIndex(item => item.id === id)
        return sizes[indexSize];
    }

    useEffect(() => {
        const newOptions = product?.size?.length > 0 ? product?.size.map(id => {
            const size = getSize(id)
            return { name: size?.name, value: size?.id }
        }) : []
        if (newOptions.length > 0) {
            setOptions(newOptions)
        }
    }, [product, sizes])

    return (
        <div>
            <Modal
                title={product.title}
                width={800}
                style={{ top: 60 }}
                visible={isModalVisible}
                onOk={() => handleOk()}
                onCancel={() => handleCancel()}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={{span: 24}} md={{span: 12}}>
                        <ThumnailProduct product={product} />
                    </Col>
                    <Col xs={{span: 24}} md={{span: 12}}>
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
                        <AddCartForm options={options} addCart={addCart}/>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

export default ModelDetail;