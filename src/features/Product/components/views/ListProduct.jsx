import { List } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

ListProduct.propTypes = {
    products: PropTypes.array,
    categories: PropTypes.array,
    sizes: PropTypes.array,
    services: PropTypes.array,
};

ListProduct.defaultProps = {
    products: [],
    categories: [],
    sizes: [],
    services: [],
}

function ListProduct(props) {
    const { products, categories, services } = props
    return (
        <List
            grid={{
                gutter: 6,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
            }}
            dataSource={products}
            renderItem={product => {
                const indexCategory = categories.findIndex(item => item.id === product.category)
                const indexService = services.findIndex(item => item.id === product.service)
                return (
                    <List.Item>
                        <Product product={product} category={categories[indexCategory]?.name} service={services[indexService]?.name} />
                    </List.Item>
                )
            }}
        />
    );
}

export default ListProduct;