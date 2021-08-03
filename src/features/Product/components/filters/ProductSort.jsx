import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SelectField from '../../../../components/Form-control/SelectField';


ProductSort.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
};

ProductSort.defaultProps = {
    filters: {},
};

function ProductSort(props) {
    const { filters, onChange } = props
    const form = useForm({
        defaultValues: {
            sort: "",
        },
    })
    const sortFilter = (value) => {
        const newFilters = {
            ...filters,
            ordering: value,
        }
        if(onChange){
            onChange(newFilters)
        }
    }

    const options = [
        {name: "Sắp xếp", value: " "}, 
        {name: "Tăng dần theo giá", value:"price" }, 
        {name: "Giảm dần theo giá", value:"-price" },
        {name: "Theo tên từ A-Z", value:"title" },
        {name: "Theo tên từ Z-A", value:"-title" },
    ]

    return (
        <div>
            <SelectField form={form} name={"sort"} label={"sort"} size={"default"} onChange={sortFilter} options={options} />
        </div>
    );
}

export default ProductSort;