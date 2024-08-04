import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { closePopup } from '../../../state/actions/popupActions'
import { loginUser } from '../../../state/actions/UserActions'

const LoginPopup = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const {error, fieldErrors} = useSelector((state) => {
        return {
            error: state.error,
            fieldErrors: state.popup.fieldErrors
        }
    })

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginUser(user));
    };
    

  return (
    <>
        <h1 className='text-center text-2xl font-semibold pb-5'>Login</h1>
        <Grid container className='flex flex-col gap-5 items-center content-center'>
            <Grid item xs={12} sm={12} className='mx-auto'>
                <TextField
                required
                id="username"
                name="username"
                value={user.username}
                label="Username"
                autoComplete='given-name'
                fullWidth
                onChange={handleInputChange}
                />
                {fieldErrors.username && <div className='ell-field-error'>{fieldErrors.username}</div>}
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    id="password"
                    name="password"
                    value={user.password}
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    fullWidth
                    onChange={handleInputChange}
                />
                {fieldErrors.password && <div className='ell-field-error'>{fieldErrors.password}</div>}
            </Grid>
            <Grid item xs={12}>
                <button onClick={handleLogin} className='ell-btn w-full h-10'>Login</button>
            </Grid>
        </Grid>
        <div className='ell-error'>{error.msg}</div>
    </>
  )
}

export default LoginPopup