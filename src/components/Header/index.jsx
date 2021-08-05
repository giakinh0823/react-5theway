import { LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Menu, Popover } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sticky } from 'react-sticky';
import { cartItemsCountSelector, cartItemsSelector } from '../../features/Cart/CartSelector';
import ListCartMini from '../../features/Cart/components/ListCartMini';

HeaderComponent.propTypes = {

};

function HeaderComponent(props) {

    const cartCount = useSelector(cartItemsCountSelector)
    const listCart = useSelector(cartItemsSelector)

    const [current, setCurrent] = useState({});

    const handleClick = e => {
        setCurrent({ current: e.key });
    };

    return (
        <div>
            <Sticky>
                {({
                    style,
                }) => (
                   <div style={{ ...style, zIndex: 1 }}>
                        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
                        <Menu.Item key="homePage">
                            <Link  style={{ color: "#434343", fontSize: "14px" }} to='/'>Trang chủ</Link>
                        </Menu.Item>
                        <Menu.Item key="product">
                            <Link style={{ color: "#434343", fontSize: "14px" }} to='/products'>Sản phẩm</Link>
                        </Menu.Item>
                        <Menu.Item key="home" style={{ margin: "0 auto" }}>
                            <Link  style={{ color: "#434343", fontSize: "14px" }} to='/'>Gia Kính</Link>
                        </Menu.Item>
                        <Menu.Item key="login" icon={<LoginOutlined />} style={{ fontSize: "14px" }}>
                            Đăng nhập
                        </Menu.Item>
                        <Menu.Item key="cart">
                            <Popover
                                placement="bottomRight"
                                title={"Giỏ hàng"}
                                overlayStyle={{ ...style, left: "", right: "10px", top: "6%", maxWidth: "380px" }}
                                content={
                                    <div>
                                        <ListCartMini listCart={listCart} />
                                    </div>
                                }
                                trigger="click"
                            >
                                <Badge count={cartCount} size={"small"}>
                                    <ShoppingCartOutlined style={{ fontSize: "20px", margin: "0 6px" }} />
                                </Badge>
                            </Popover>
                        </Menu.Item>
                    </Menu>
                   </div>
                )}
            </Sticky>
        </div>
    );
}

export default HeaderComponent;