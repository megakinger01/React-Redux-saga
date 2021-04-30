import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Button, Checkbox, Divider, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from '../hooks/useForm';
import { useStyle } from '../hooks/useStyle';
import { useDispatch } from 'react-redux';
import { loginGoogleAction, signIn } from '../redux/action/auth';






export const LoginPage = () => {

    const dispatch = useDispatch()

    const style = useStyle()
    const [values, handleInputChange] = useForm({
        email: 'pedro@correo.com',
        password: '123456*-',
    })

    const { email, password } = values

    const onsubmit = (ev) => {
        ev.preventDefault()
        console.log('click');
        dispatch(signIn(email, password))

    }

    const signGoogle = () => {
        console.log('click');
        dispatch(loginGoogleAction())
    }


    return (
        < >
            <Grid>
                <Paper elevation={9} className={style.paper}>

                    <Grid align="center">
                        <Avatar className={style.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Ingresar</h2>
                    </Grid>

                    <form onSubmit={onsubmit}>

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

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Recordar usuario"
                        />

                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className={style.btn}
                            fullWidth
                        >

                            INGRESAR
                            </Button>
                    </form>

                    <Divider />


                    <Button
                        type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                        className={style.btn}
                        onClick={signGoogle}
                    >

                        Google
                    </Button>

                    <Typography>
                        ¿No tienes cuenta?
                        <Link to="/auth/register">
                            registrate
                        </Link>
                    </Typography>

                </Paper>
            </Grid>
        </>
    )
}

