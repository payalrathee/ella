import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from "../card/AddressCard"

const DeliveryAddressForm = () => {
  return (
    <div className=''>
        <Grid container>

            <Grid item xs={12} sm={5} className='p-2 overflow-auto h-[70vh]'>
              <div className='p-5 flex flex-col gap-3'> 
                <AddressCard/>
                <a className='ell-btn w-1/2 mt-3'>Use Address</a>

                <AddressCard/>
                <a className='ell-btn w-1/2 mt-3'>Use Address</a>

                <AddressCard/>
                <a className='ell-btn w-1/2 mt-3'>Use Address</a>
                
              </div>
            </Grid>

            <Grid item xs={12} sm={7} className='p-2'>
              <form className='shadow-md p-5'>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="FirstName"
                    autoComplete='given-name'
                    fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="LastName"
                    autoComplete='given-name'
                    fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    autoComplete='given-name'
                    fullWidth
                    multiline
                    rows={3}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    autoComplete='given-name'
                    fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="province"
                    name="province"
                    label="Province/Region"
                    autoComplete='given-name'
                    fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip"
                    autoComplete='given-name'
                    fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="contact"
                    name="contact"
                    label="Contact"
                    autoComplete='given-name'
                    fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <button className='ell-btn w-full'>Continue</button>
                  </Grid>

                </Grid>
              </form>
            </Grid>

        </Grid>
    </div>
  )
}

export default DeliveryAddressForm