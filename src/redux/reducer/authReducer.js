import { types } from "../types/types"

const initialState = {

    loading: false,
    error: null

}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.startLoading:
            return {
                ...state,
                loading: true,
            }


        case types.startLoadingGoogle:
            return {
                ...state,
                loading: true,
            }

        case types.startLoadingRegister:
            return {
                ...state,
                loading: true,
            }


        case types.login:

            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName,
                loading: false,
            }

        case types.finishLoading:
            return {
                ...state,

            }
        case types.logout:
            return {}

        default:
            return state
    }

}