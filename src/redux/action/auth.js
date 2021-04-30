import { types } from "../types/types";






export const signIn = (email, password) => ({
    type: types.startLoading,
    payload: {
        email, password
    }
})


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid, displayName
    }
})

export const loginGoogleAction = () => ({
    type: types.startLoadingGoogle
})



export const finishloading = () => ({
    type: types.finishLoading,
})



export const register = (name, email, password) => ({
    type: types.startLoadingRegister,
    payload: {
        name, email, password
    }
})



export const errorAction = (error) => ({
    type: types.error,
    payload: error
})

export const logoutSesion = () => ({
    type: types.logout
})


