import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function SearchNotFound() {
    return (
        <Grid style={{
            width:'100%',
            height:'100%',
            textAlign:'center',
            textAlign:'-webkit-center'
        }} >

            <div style={{
                width:200,
                height:200,
                backgroundImage: `url(${require('../../static/no_data_qbuo.svg')})`,
                backgroundSize: 'cover'
            }}></div>
            <Typography>We are not available here. <a onClick={()=>localStorage.removeItem('search_data')} href='/rooms'>Found Something</a></Typography>
        </Grid>

    )
}
