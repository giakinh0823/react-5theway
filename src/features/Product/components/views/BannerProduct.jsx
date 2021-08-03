import { Carousel } from 'antd';
import React from 'react';
import banner from '../../../../images/home/banner4.jpg';

BannerProduct.propTypes = {
    
};

function BannerProduct(props) {
    const contentStyle = (image) => {
        return (
            {
                height: '400px',
                width: '100%',
                lineHeight: '160px',
                textAlign: 'center',
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        )
    };
    return (
        <div>
            <Carousel>
                <div>
                    <div style={contentStyle(banner)}>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default BannerProduct;