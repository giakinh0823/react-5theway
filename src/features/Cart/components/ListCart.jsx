import { Button, Image, Row, Space, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import QuantityField from '../../../components/Form-control/QuantityField';
import useCategorys from '../../../Hooks/useData/useCategorys';
import useSizes from '../../../Hooks/useData/useSizes';
import { formatPrice } from '../../../utils/common';
import { removeFromCart, setQuantity } from '../CartSlice';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

ListCart.propTypes = {
    cartItems: PropTypes.array,
};

ListCart.defaultProps = {
    cartItems: []
}

function ListCart(props) {
    const { cartItems } = props
    const { sizes } = useSizes()
    const { categorys } = useCategorys()
    const dispatch = useDispatch()
    const datas = cartItems.map((item, index) => {
        return {
            key: index,
            id: item.id,
            idSize: item.size,
            image: item.product.image,
            title: item.product.title,
            category: categorys[categorys.findIndex(category => category.id === item.product.category)]?.name,
            quantity: item.quantity,
            size: sizes[sizes.findIndex(size => size.id === item.size)]?.name,
            price: formatPrice(item.product.price),
            total: formatPrice(item.product.price * item.quantity),

        }
    })

    const action = (id, size) => {
        const actions = removeFromCart({
            id: id,
            size: size,
        })
        dispatch(actions)
    }

    const form = useForm()

    return (
        <div>
            {/* <form onSubmit={form.handleSubmit(handleSubmit)}> */}
            <Table dataSource={datas}>
                <Column title="Hình ảnh" dataIndex="image" key="image"
                    render={(image) => (
                        <Image src={image} style={{ maxWidth: "100px" }} />
                    )}
                />
                <Column title="Tên sản phẩm" dataIndex="title" key="title" />
                <Column title="Loại" dataIndex="category" key="category" />
                <Column title="Size" dataIndex="size" key="size" />
                <Column
                    title="Số Lượng"
                    dataIndex="quantity"
                    key="quantity"
                    render={(text, record) => {
                        const handleSubmit = async (values) => {
                            const newValues =JSON.parse(JSON.stringify(values))
                            const quantity = newValues[`${record.id}s${record.size}`]
                            if(quantity>0){
                                const actions = setQuantity({
                                    id: record.id,
                                    size: record.idSize,
                                    quantity:quantity,
                                })
                                dispatch(actions)
                            }else {
                                const actions = removeFromCart({
                                    id: record.id,
                                    size: record.idSize,
                                })
                                dispatch(actions)
                            }
                        }
                        return (
                            <form onSubmit={form.handleSubmit(handleSubmit)} style={{ textAlign: "center" }}>
                                <QuantityField key={record.id} form={form} label={`${record.id}`} defaultValue={Number.parseInt(text)} name={`${record.id}s${record.size}`} />
                                <Button type="link" htmlType="submit">Lưu</Button>
                            </form>
                        )
                    }}
                />
                <Column title="Giá" dataIndex="price" key="price" />
                <Column title="Tổng" dataIndex="total" key="total" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button type="primary" onClick={() => action(record.id, record.idSize)}>
                                Delete
                            </Button>
                        </Space>
                    )}
                />
            </Table>
            {/* <Row style={{ margin: "5px 0 0 0" }}>
                    <Button style={{ width: "400px" }} htmlType="submit" type="primary" shape="round" size="large">
                        Mua ngay
                    </Button>
                </Row>
            </form> */}
        </div>
    );
}

export default ListCart;