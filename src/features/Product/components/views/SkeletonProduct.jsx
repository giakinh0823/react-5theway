import { Col, Row, Skeleton } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


SkeletonProduct.propTypes = {
    number: PropTypes.number,
    gutter: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
};

SkeletonProduct.defaultProps= {
    number: 12,
    gutter: 6,
    height: 200,
    width: 200,
}

function SkeletonProduct(props) {
    const {number, gutter, height, width} = props
    return (
        <Row gutter={gutter}>
            {
                [...Array(number)].map((x, i) => (
                    <Col className="gutter-row" xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}} key={i}>
                        <Skeleton.Button active="true" style={{ height: height, width: width }} />
                        <Skeleton active="true"/>
                    </Col >
                ))
            }
        </Row>
    );
}

export default SkeletonProduct;