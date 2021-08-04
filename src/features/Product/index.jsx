import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
                <Route path={`${match.url}/:productId`} component={DetailPage} exact />
            </Switch>
        </div>
    );
}

export default ProductFeature;