import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

ThumnailProduct.propTypes = {
    product: PropTypes.object,
};

ThumnailProduct.defaultProps = {
    product: {},
};

function ThumnailProduct(props) {
    const {product} = props
    const thumbnailUrl = product.image;
    return (
        <div>
            <Image src={thumbnailUrl} alt={product.title} style={{width: "100%"}}/>
        </div>
    );
}

export default ThumnailProduct;