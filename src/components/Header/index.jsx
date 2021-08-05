import { ExclamationCircleOutlined, LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Modal, Badge, Menu, Popover } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sticky } from 'react-sticky';
import { login, logout } from '../../features/Auth/AuthSlice';
import Login from '../../features/Auth/components/Login';
import { cartItemsCountSelector, cartItemsSelector } from '../../features/Cart/CartSelector';
import ListCartMini from '../../features/Cart/components/ListCartMini';
import classes from './Header.module.scss';

HeaderComponent.propTypes = {

};

function HeaderComponent(props) {

    const cartCount = useSelector(cartItemsCountSelector)
    const listCart = useSelector(cartItemsSelector)
    const dispatch = useDispatch()
    const loginInUser = useSelector(state => state.auth.current)
    const isLoggedIn = !!loginInUser.id

    const [current, setCurrent] = useState({});
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const onSubmit = async (values) => {
        setConfirmLoading(true);
        try {
            const actions = login(values)
            await dispatch(actions)
            setVisible(false);
        } catch (error) {

        }
        setConfirmLoading(false);
    }
    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };


    const handleClick = e => {
        setCurrent({ current: e.key });
    };

    const HandleLogout = () => {
        const actions = logout()
        dispatch(actions)
    }

    function confirmLogout() {
        const { confirm } = Modal;
        confirm({
            title: 'Bạn có muốn đăng xuất không',
            icon: <ExclamationCircleOutlined />,
            content: 'Hạy chọn đăng xuất để tiếp tục',
            okText: 'Đăng xuất',
            cancelText: 'Hủy bỏ',
            onOk() {
                HandleLogout()
            },
            onCancel() { },
        });
    }


    return (
        <div>
            <Sticky>
                {({
                    style,
                }) => (
                    <div style={{ ...style, zIndex: 1 }}>
                        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="homePage" className={classes.item}>
                                <Link style={{ color: "#434343", fontSize: "16px" }} to='/'>Trang chủ</Link>
                            </Menu.Item>
                            <Menu.Item key="product" className={classes.item} style={{ marginRight: "auto"}}>
                                <Link style={{ color: "#434343", fontSize: "16px" }} to='/products'>Sản phẩm</Link>
                            </Menu.Item>
                            {!isLoggedIn && (
                                <Menu.Item key="login" icon={<LoginOutlined />} onClick={showModal} className={classes.item} style={{ fontSize: "16px" }}>
                                    Đăng nhập
                                </Menu.Item>
                            )}
                            {isLoggedIn && (
                                <Menu.Item key="user" className={classes.item}>
                                    Xin chào {loginInUser.first_name + " " + loginInUser.last_name}
                                </Menu.Item>
                            )}
                            {isLoggedIn && (
                                <Menu.Item key="login" icon={<LoginOutlined />} onClick={confirmLogout} className={classes.item} style={{ fontSize: "16px" }}>
                                    Đăng xuất
                                </Menu.Item>
                            )}

                            <Menu.Item key="cart" className={classes.item}>
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
                                        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                                    </Badge>
                                </Popover>
                            </Menu.Item>
                        </Menu>
                        <Modal
                            visible={visible}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                            width={600}
                            cancelText="Thoát"
                        >
                            <div style={{ padding: "50px 60px 0 60px" }}>
                                <Login onSubmit={onSubmit} />
                            </div>
                        </Modal>

                    </div>
                )}
            </Sticky>
        </div>
    );
}

export default HeaderComponent;