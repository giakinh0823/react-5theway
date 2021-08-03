import React from 'react';
import PropTypes from 'prop-types';
import SelectTagField from '../../../../components/Form-control/SelectTagField';
import { useForm } from 'react-hook-form';
import { Typography } from 'antd';


SizeFilter.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
    sizes: PropTypes.array,
};

SizeFilter.defaultProps = {
    sizes: [],
    filters: {},
}

function SizeFilter(props) {
    const { Title } = Typography;
    const {filters, onChange, sizes} = props
    const form = useForm({
        defaultValue: {
            value: [],
        }
    })

    const filterSize = (values) => {
        const newFilters = {
            ...filters,
            page: 1,
            size: values,
        }
        if(onChange){
            onChange(newFilters)
        }
    } 
    const options = sizes.map((size) => ({value: size.id, name: size.name, color: Math.floor(Math.random()*16777215).toString(16)}))
    return (
        <div>
            <Title level={5}>Kích thước</Title>
            <SelectTagField form={form} name={"size"} options={options} onChange={filterSize}/>
        </div>
    );
}

export default SizeFilter;