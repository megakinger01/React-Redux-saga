import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { firebase } from '../firebase/firebase-config'
import { AppPage } from '../pages/AppPage';
import { login } from '../redux/action/auth';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState(false)
    const [isCheking, setIsCheking] = useState(true)

    useEffect(() => {

        firebase.auth().onAuthStateChanged(user => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLogged(true)
            } else {
                setIsLogged(false)
            }

            setIsCheking(false)
        })



    }, [dispatch, setIsCheking, setIsLogged])


    if (isCheking) {
        return (
            <h1>Espere....</h1>
        )
    }


    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={AuthRouter}
                            isAuthenticated={isLogged}
                        />

                        <PrivateRoute
                            path="/"
                            component={AppPage}
                            isAuthenticated={isLogged}
                            exact
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
