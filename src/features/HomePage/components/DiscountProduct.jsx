import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import useSizes from '../../../Hooks/useData/useSizes';
import useService from '../../../Hooks/useData/useService';
import useCategorys from '../../../Hooks/useData/useCategorys';
import productApi from '../../../api/productApi';
import ListProduct from '../../Product/components/views/ListProduct';
import SkeletonProduct from '../../Product/components/views/SkeletonProduct';


DiscountProduct.propTypes = {

};

function DiscountProduct(props) {
    const { Title } = Typography;
    const { sizes } = useSizes()
    const { services } = useService()
    const { categorys } = useCategorys()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ; (async () => {
            try {
                ; (async () => {
                    try {
                        const response = await productApi.getAll({})
                        setProducts(response.data.results.slice(response.data.results.length-8, response.data.results.length))
                        setLoading(false)
                    } catch (error) {
                        console.log(error.message)
                    }
                })()
            } catch (error) {

            }
        })()
    }, [])

    return (
        <div>
            <Row style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0" }}>
                <Title level={2}>Đang giảm giá</Title>
                <Text>Mỗi tuần 5theway đều có sản phẩm mới</Text>
            </Row>
            <Row style={{ padding: "0 120px" }}>
                {!loading && (
                    <>
                        <ListProduct products={products} categories={categorys} sizes={sizes} services={services} />
                    </>
                )}
                {loading && <SkeletonProduct number={8} gutter={6} height={250} width={250}/>}
            </Row>
        </div>
    );
}


export default DiscountProduct;