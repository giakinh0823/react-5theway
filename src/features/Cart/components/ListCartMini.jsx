import React from 'react';
import PropTypes from 'prop-types';
import { cartItemsSelector, cartItemsTotalSelector } from '../CartSelector';
import { useSelector } from 'react-redux'
import { List } from 'antd/lib/form/Form';
import CartMini from './CartMini';
import { Button, Row } from 'antd';
import { formatPrice } from '../../../utils/common';

ListCartMini.propTypes = {
    listCart: PropTypes.array,
};

ListCartMini.defaultProps = {
    listCart: [],
}

function ListCartMini(props) {
    const { listCart } = props
    const totalPrice = useSelector(cartItemsTotalSelector)
    console.log(listCart)
    return (
        <div>
            <div style={{ overflowY: 'auto', overflowX: "hidden", maxHeight: "400px"}}>
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
                    Đi đến giỏ hàng
                </Button>
            </Row>
        </div>
    );
}

export default ListCartMini;