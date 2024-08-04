import { Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closePopup } from '../../../state/actions/popupActions'
import { signupUser } from '../../../state/actions/UserActions'

const SignupPopup = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        pasword: ''
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

    const handleSignup = (e) => {

        e.preventDefault();
        dispatch(signupUser(user));
    }

  return (
    <>
        <h1 className='text-center text-2xl font-semibold pb-5'>Sign Up</h1>
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
            <Grid item xs={12} sm={12} className='mx-auto'>
                <TextField
                required
                id="email"
                name="email"
                value={user.email}
                label="Email"
                type='email'
                autoComplete='given-name'
                fullWidth
                onChange={handleInputChange}
                />
                {fieldErrors.email && <div className='ell-field-error'>{fieldErrors.email}</div>}
            </Grid>
            <Grid item xs={12} sm={12} className='mx-auto'>
                <TextField
                required
                id="tel"
                name="phone"
                value={user.phone}
                label="Phone"
                type='phone'
                autoComplete='given-name'
                fullWidth
                onChange={handleInputChange}
                />
                {fieldErrors.phone && <div className='ell-field-error'>{fieldErrors.phone}</div>}
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
                <button onClick={handleSignup} className='ell-btn w-full h-10'>Sign up</button>
            </Grid>
        </Grid>
        <div className='ell-error'>{error.msg}</div>
    </>
  )
}

export default SignupPopup