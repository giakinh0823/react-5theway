import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import QuantityField from '../../../../components/Form-control/QuantityField';
import RadioCycleField from '../../../../components/Form-control/RadioCycleField';

AddCartForm.propTypes = {
    options: PropTypes.array,
    addCart: PropTypes.func,
};

AddCartForm.defaultProps = {
    options: [],
};

function AddCartForm(props) {

    const { options, addCart } = props

    const form = useForm({
        defaultValues: {
            size: 2,
            quantity: 0,
        }
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
                <Row>
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