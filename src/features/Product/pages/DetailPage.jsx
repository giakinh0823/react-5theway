import { LoadingOutlined } from '@ant-design/icons';
import { Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import useCategorys from '../../../Hooks/useData/useCategorys';
import useProductDetail from '../../../Hooks/useData/useProductDetail';
import useService from '../../../Hooks/useData/useService';
import useSizes from '../../../Hooks/useData/useSizes';
import { addToCart } from '../../Cart/CartSlice';
import AddCartForm from '../components/views/AddCartForm';
import ProductInfo from '../components/views/ProductInfo';
import ThumnailProduct from '../components/views/ThumnailProduct';
import classes from './DetailPage.module.scss'
DetailPage.propTypes = {

};

function DetailPage(props) {
    const match = useRouteMatch()
    const dispatch = useDispatch();
    const { product, loading } = useProductDetail(match.params.productId)
    const { services } = useService()
    const { categorys } = useCategorys()
    const { sizes } = useSizes()
    const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin/>;


    const service = services[services.findIndex(item => item.id === product.service)]?.name
    const category = categorys[categorys.findIndex(item => item.id === product.category)]?.name

    const addCart = (values) => {
        const actions = addToCart({
            id: product.id,
            product: product,
            ...values,
        })
        dispatch(actions)
    }

    const [options, setOptions] = useState([])

    useEffect(() => {
        const newOptions = product?.size?.length > 0 ? product?.size.map(id => {
            const size = sizes[sizes.findIndex(item => item.id === id)]
            return { name: size?.name, value: size?.id }
        }) : []
        if (newOptions.length > 0) {
            setOptions(newOptions)
        }
    }, [product, sizes])

    return (
        <div>
            {!loading && (
                <div className={classes.root}>
                    <Row gutter={{ xs: 6, md: 12, lg: 24 }}>
                        <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                            <ThumnailProduct product={product} />
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 14 }}>
                            <ProductInfo product={product} service={service} category={category} addCart={addCart} />
                            <AddCartForm options={options} addCart={addCart} />
                        </Col>
                    </Row>
                </div>
            )}
            {loading && (
                <div className={classes.spin}>
                    <Spin indicator={antIcon}/>
                </div>
            )}
        </div>
        
    );
}

export default DetailPage;