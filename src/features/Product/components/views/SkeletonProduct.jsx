import { Col, Row, Skeleton } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


SkeletonProduct.propTypes = {
    number: PropTypes.number,
    gutter: PropTypes.number,
};

SkeletonProduct.defaultProps= {
    number: 12,
    gutter: 6,
}

function SkeletonProduct(props) {
    const {number, gutter} = props
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
                [...Array(number)].map((x, i) => (
                    <Col className="gutter-row" span={gutter} key={i}>
                        <Skeleton.Button active="true" style={{ height: 200, width: 200 }} />
                        <Skeleton active="true" />
                    </Col >
                ))
            }
        </Row>
    );
}

export default SkeletonProduct;