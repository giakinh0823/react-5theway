import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

AuthFeature.propTypes = {

};

function AuthFeature(props) {
    const match = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route path={`${match.url}`} exact>
                    <LoginPage />
                </Route>
                <Route path={`${match.url}/login`}>
                    <LoginPage />
                </Route>
                <Route path={`${match.url}/register`}>
                    <RegisterPage />
                </Route>
            </Switch>
        </div>
    );
}

export default AuthFeature;