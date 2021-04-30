import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { logoutSesion } from '../redux/action/auth'

export const AppPage = () => {

    const dispatch = useDispatch()

    const salirsesion = () => {
        dispatch(logoutSesion())

    }

    return (
        <div>

            <Button
                onClick={salirsesion}
                variant="contained"
                color="secondary"
            >
                Cerrar Sesión
            </Button>
        </div>
    )
}
