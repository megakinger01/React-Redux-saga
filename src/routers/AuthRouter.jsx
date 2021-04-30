import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    component={LoginPage}
                    path="/auth/login"
                    exact
                />
                <Route
                    component={RegisterPage}
                    path="/auth/register"
                    exact
                />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
