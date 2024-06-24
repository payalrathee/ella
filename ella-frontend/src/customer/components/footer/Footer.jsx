
import { Support } from '@mui/icons-material';
import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {

  const company = ['About', 'Blog', 'Jobs', 'Press', 'Partners'];
  const solutions = ['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'];
  const doc = ['Guides', ' API Status'];
  const legal = ['Claim', 'Privacy', 'Terms'];

  return (

    <Grid container className='ell-footer text-center bg-black p-10'>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='text-primary'>Company</Typography>
        {
          company.map(item => (<div><Button>{item}</Button></div>))
        }
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='text-primary'>Solutions</Typography>
        {
          solutions.map(item => (<div><Button>{item}</Button></div>))
        }
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='text-primary'>Documentation</Typography>
        {
          doc.map(item => (<div><Button>{item}</Button></div>))
        }
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='text-primary'>Legal</Typography>
        {
          legal.map(item => (<div><Button>{item}</Button></div>))
        }
      </Grid>

      <Grid item xs={12} className='pt-10'>
        <Typography>
          &copy; 2024 ELLA. All rights reserved.
        </Typography>
        <Typography>
          Icons made by {' '}
          <Link href="htps://www.figma.com/" className='text-primary'>Figma</Link>
        </Typography>
      </Grid>
      
    </Grid>

  )
}

export default Footer