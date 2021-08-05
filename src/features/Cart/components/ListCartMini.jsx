import { Button, Empty, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../utils/common';
import { cartItemsTotalSelector } from '../CartSelector';
import CartMini from './CartMini';
import { Link } from 'react-router-dom';


ListCartMini.propTypes = {
    listCart: PropTypes.array,
};

ListCartMini.defaultProps = {
    listCart: [],
}

function ListCartMini(props) {
    const { listCart } = props
    const totalPrice = useSelector(cartItemsTotalSelector)
    return (
        <div>
            {listCart.length !== 0 && (
                <div>
                    <div style={{ overflowY: 'auto', overflowX: "hidden", maxHeight: "400px" }}>
                        <ul style={{ padding: 0, margin: 0 }}>
                            {listCart.map(item => (
                                <CartMini cart={item} />
                            ))}
                        </ul>
                    </div>
                    <Row style={{ justifyContent: "center", margin: "20px 0 10px 0", padding: "10px 0", borderTop: "1px solid #333", borderBottom: "1px solid #333" }}>
                        Tổng giá: {formatPrice(totalPrice)}
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Button type="text" style={{ width: "100%" }}>
                            <Link to="/carts">
                                Đi đến giỏ hàng
                            </Link>
                        </Button>
                    </Row>
                </div>
            )}
            {listCart.length === 0 &&
                <>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    <Row style={{ justifyContent: "center" }}>
                        <Button type="text" style={{ width: "100%" }}>
                            <Link to="/carts">
                                Đi đến giỏ hàng
                            </Link>
                        </Button>
                    </Row>
                </>}
        </div>
    );
}

export default ListCartMini;