import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SliderField from '../../../../components/Form-control/SliderField';
import { useForm } from 'react-hook-form';
import Text from 'antd/lib/typography/Text';
import { formatPrice } from '../../../../utils/common';
import { Typography } from 'antd';

PriceField.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
};

PriceField.defaultProps = {
    filters: {},
}

function PriceField(props) {
    const { Title } = Typography;
    const {filters, onChange} = props;
    const [price, setPrice] = useState({
        price__gte: 100000,
        price__lte: 1000000,
    })

    const form = useForm({
        defaultValue: {
            value: [],
        }
    })

    const changePrice = (gte, lte) => {
        const newFilters = {
            ...filters,
            page: 1,
            price__gte: gte,
            price__lte: lte,
        }
        setPrice({
            price__gte: gte,
            price__lte: lte,
        })
        if(onChange){
            onChange(newFilters)
        }
    }

    return (
        <div>
            <Title level={5}>Tìm kiếm theo giá</Title>
            <SliderField name="price" form={form} min={100000} max={1000000} step={50000} onChange={changePrice}/>
            <Text>{`Giá từ ${formatPrice(price.price__gte)} đến ${formatPrice(price.price__lte)}` }</Text>
        </div>
    );
}

export default PriceField;