import React from 'react'
import {Grid} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    const style={style:{height:'70vh'}}
    return (
        <Grid container justify='center' alignItems='center' {...style} > <CircularProgress /></Grid>
    )
}
export default Loading