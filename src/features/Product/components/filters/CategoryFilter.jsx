import { Menu } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './CategoryFilter.scss';


CategoryFilter.propTypes = {
    categories: PropTypes.array,
    onChange: PropTypes.func,
    filters: PropTypes.object,
};

CategoryFilter.defaultProps = {
    categories: [],
    filters: {},
};

function CategoryFilter(props) {
    const { categories, filters, onChange } = props

    const filterCategory = (value) => {
        const newFilters = {
            ...filters,
            page: 1,
            category: value.key,
        }
        console.log(value.key)
        if (onChange) {
            onChange(newFilters)
        }
    }

    return (
        <div>
            <Menu mode="inline" onSelect={filterCategory}>
                <Menu.Item key={""}>TẤT CẢ SẢN PHẨM</Menu.Item>
                {categories.map(category => (
                    <Menu.Item key={category.id}>{category.name}</Menu.Item>
                ))}
            </Menu>
        </div>
    );
}

export default CategoryFilter;