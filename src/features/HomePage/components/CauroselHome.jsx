import { Carousel } from 'antd';
import React from 'react';
import banner1 from '../../../images/home/banner3.jpg';
import banner2 from '../../../images/home/banner4.jpg';

CauroselHome.propTypes = {

};

function CauroselHome(props) {
    const contentStyle = (image) => {
        return (
            {
                height: '500px',
                width: '100%',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        )
    };
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle(banner1)}></div>
                </div>
                <div>
                    <div style={contentStyle(banner2)}></div>
                </div>
            </Carousel>
        </div>
    );
}

export default CauroselHome;