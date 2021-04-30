import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useStyle } from '../hooks/useStyle';
import { register } from '../redux/action/auth';
import { useDispatch } from 'react-redux';




export const RegisterPage = () => {

    const dispatch = useDispatch()
    const style = useStyle()
    const [values, handleInputChange] = useForm({

        name: 'pedro',
        email: 'pedro@correo.com',
        password: '123456*-',
        password2: '123456*-',
    })

    const { name, email, password, password2 } = values

    const onsubmit = (ev) => {
        ev.preventDefault()
        // console.log('click',  name , email , password );
        dispatch(register(name, email, password))
    }





    return (
        < >
            <Grid>
                <Paper elevation={9} className={style.paper}>

                    <Grid align="center">
                        <Avatar className={style.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Registrate</h2>
                    </Grid>

                    <form onSubmit={onsubmit}>
                        <TextField
                            placeholder=""
                            label="name"
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            fullWidth
                        />

                        <TextField
                            placeholder=""
                            label="email"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            fullWidth
                        />

                        <TextField
                            placeholder=""
                            type="password"
                            label="contraseña"
                            value={password}
                            name="password"
                            onChange={handleInputChange}
                            fullWidth
                        />

                        <TextField
                            placeholder=""
                            type="password"
                            label="confirme contraseña"
                            value={password2}
                            name="password2"
                            onChange={handleInputChange}
                            fullWidth
                        />

                        <Button
                            type="submit"
                            color="primary"
                            fullWidth
                            variant="contained"
                            className={style.btn}
                        >

                            Registrar
                        </Button>
                    </form>



                    <Typography className={style.typography}>
                        Ya tengo cuenta:
                        <Link to="/auth/login">
                            Iniciar sesion
                        </Link>
                    </Typography>

                </Paper>
            </Grid>
        </>
    )
}
