import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import QuantityField from '../../../../components/Form-control/QuantityField';
import RadioCycleField from '../../../../components/Form-control/RadioCycleField';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


AddCartForm.propTypes = {
    options: PropTypes.array,
    addCart: PropTypes.func,
};

AddCartForm.defaultProps = {
    options: [],
};

function AddCartForm(props) {

    const { options, addCart } = props

    const schema = yup.object().shape({
        size: yup.number().min(0,"Xin vui lòng chọn size"),
        quantity: yup.number().min(1, "Số lượng phải lớn hơn hoặc bằng 1").required("Xin vui lòng nhập số lượng").typeError("Xin vui lòng nhập số!"),
    });


    const form = useForm({
        defaultValues: {
            size: -1,
            quantity: 0,
        },
        resolver: yupResolver(schema),
    })

    const onSubmit = async (values) => {
        addCart(values)
    }

    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Row style={{ margin: "10px 0 0 0" }}>
                    <RadioCycleField form={form} name="size" label="Size" options={options} />
                </Row>
                <Row style={{margin: "12px 0"}}>
                    <QuantityField form={form} name="quantity" label="Quantity" />
                </Row>
                <Row style={{ margin: "5px 0 0 0" }}>
                    <Button style={{ width: "400px" }} htmlType="submit" type="primary" shape="round" icon={<ShoppingCartOutlined />} size="large">
                        Mua ngay
                    </Button>
                </Row>
            </form>
        </div>
    );
}

export default AddCartForm;