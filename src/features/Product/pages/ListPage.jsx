import { Breadcrumb, Col, Pagination, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../api/categoryApi';
import productApi from '../../../api/productApi';
import serviceApi from '../../../api/serviceApi';
import sizeApi from '../../../api/sizeApi';
import CategoryFilter from '../components/filters/CategoryFilter';
import PriceField from '../components/filters/PriceField';
import ProductSort from '../components/filters/ProductSort';
import SizeFilter from '../components/filters/SizeFilter';
import BannerProduct from '../components/views/BannerProduct';
import ListProduct from '../components/views/ListProduct';
import SkeletonProduct from '../components/views/SkeletonProduct';
import classes from './ListPage.module.scss';

function ListPage(props) {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [sizes, setSizes] = useState([])
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        page: 1,
    });
    useEffect(() => {
        ; (async () => {
            try {
                const response = await productApi.getAll(filters)
                setProducts(response.data.results)
                setCount(response.data.count)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [filters])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await categoryApi.getAll()
                setCategories(response.data)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await sizeApi.getAll()
                setSizes(response.data)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await serviceApi.getAll()
                setServices(response.data)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])

    const changePage = (pageNumber) => {
        setLoading(true)
        const newFilters = {
            ...filters,
            page: pageNumber,
        }
        setFilters(newFilters)
    }

    const filterChange = (newFilters) => {
        setLoading(true)
        setFilters(newFilters)
    }

    return (
        <div>
            <div style={{ marginBottom: "30px"}}>
                <BannerProduct />
            </div>
            <Row>
                <Col xs={{span: 0}} lg={{span: 6}}>
                    <Layout style={{
                        padding: '0 24px 24px', backgroundColor: "#fff",
                    }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <div>
                                <CategoryFilter categories={categories} onChange={filterChange} filters={filters} />
                            </div>
                            <div className={classes.slider}>
                                <PriceField onChange={filterChange} filters={filters} />
                            </div>
                            <div>
                                <SizeFilter sizes={sizes} filters={filters} onChange={filterChange} />
                            </div>
                        </Content>
                    </Layout>
                </Col>
                <Col xs={{span: 24}} lg={{span: 18}}>
                    <Layout style={{
                        padding: '0 24px 24px',
                        backgroundColor: "#fff",
                    }}>
                        <div className={classes.header}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                                <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
                            </Breadcrumb>
                            <ProductSort onChange={filterChange} />
                        </div>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {!loading && (
                                <>
                                    <ListProduct products={products} categories={categories} sizes={sizes} services={services} />
                                    <div className={classes.pagination}>
                                        <Pagination pageSizeOptions={[]} current={filters?.page} defaultPageSize={16} total={count} onChange={changePage} />
                                    </div>
                                </>
                            )}
                            {loading && <SkeletonProduct number={16} gutter={6} />}
                        </Content>
                    </Layout>
                </Col>
            </Row>
        </div>
    );
}

export default ListPage;