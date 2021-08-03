import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

ThumnailCart.propTypes = {
    product: PropTypes.object,
};

ThumnailCart.defaultProps = {
    product: {},
};

function ThumnailCart(props) {
    const {product} = props
    const thumbnailUrl = product.image;
    return (
        <div>
            <Image src={thumbnailUrl} alt={product.title} style={{width: "100%"}}/>
        </div>
    );
}

export default ThumnailCart;