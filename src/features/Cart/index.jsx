import { Switch } from 'antd';
import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

CartFeature.propTypes = {

};

function CartFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.url} exact >
                    <ListPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default CartFeature;