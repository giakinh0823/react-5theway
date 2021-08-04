import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { Typography } from 'antd';
import image from '../../images/home/image.jpg'

FooterComponent.propTypes = {

};

function FooterComponent(props) {
    const { Title } = Typography;
    return (
        <div style={{backgroundColor: "#262626", color: "#fafafa", marginTop: "40px"}}>
            <Row style={{padding: "20px 40px 0 40px",}} gutter={6}>
                <Col sm={{span: 24}} md={{span: 12}}  lg={{span: 8}}>
                    <Title level={3} style={{color: "#fafafa",  marginBottom: "20px"}}>Giới thiệu</Title>
                    <Text style={{color: "#fafafa"}}>
                        5Theway The Shirt You Need - 5Theway được thành lập vào năm 2016, tất cả sản phẩm của 5Theway đều được tự thiết kế và sản xuất dựa theo tiêu chí chất lượng. Tất cả sản phẩm của 5Theway đều thuộc bản quyền của 5Theway
                    </Text>
                    <div>
                        <img src={image} alt="" style={{ width: "60%", margin: "20px 0" }} />
                    </div>
                </Col>
                <Col  sm={{span: 24}} md={{span: 12}}  lg={{span: 8}}>
                    <Title level={3} style={{color: "#fafafa", marginBottom: "20px"}}>Thông tin liên hệ</Title>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Text style={{color: "#fafafa", fontSize:"16px"}}>
                            Address: 852 Sư Vạn Hạnh, Quận 10, HCM
                        </Text>
                        <Text style={{color: "#fafafa", fontSize:"16px"}}>
                            Email : webseller5theway@gmail.com
                        </Text>
                        <Text style={{color: "#fafafa", fontSize:"16px"}}>
                            Hotline : 0966606503
                        </Text>
                        <Text style={{color: "#fafafa", fontSize:"16px"}}>
                            Instagram:   seller.5theway
                        </Text>
                    </div>
                </Col>
                <Col  sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                    <Title level={3} style={{color: "#fafafa",  marginBottom: "20px"}}>Fanpge</Title>
                    <div>
                        <iframe
                            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F5theway&tabs&width=340&height=100px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                            width="100%"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameBorder="0"
                            title="Facebook"></iframe>
                    </div>
                </Col>
            </Row>
            <Row>
                <div style={{width: "100%", height: "40px", backgroundColor: "#1f1f1f", textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center",}}>
                     <Text style={{color: "#fafafa"}}>Copyright © 2021 5Theway. Template by Hà Gia Kính</Text>
                </div>
            </Row>
        </div>
    );
}

export default FooterComponent;