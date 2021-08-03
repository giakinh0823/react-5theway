import React from 'react';
import CauroselHome from './components/CauroselHome';
import DiscountProduct from './components/DiscountProduct';
import NewProduct from './components/NewProduct';

HomePageFeature.propTypes = {
    
};

function HomePageFeature(props) {
    return (
        <div>
            <CauroselHome/>
            <NewProduct/>
            <DiscountProduct/>
        </div>
    );
}

export default HomePageFeature;