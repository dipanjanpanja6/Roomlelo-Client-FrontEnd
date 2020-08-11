import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'; 
import Typography from '@material-ui/core/Typography'; 
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:20,
    background:theme.palette.secondary.main
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 210,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          ₹ {props.price}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button variant='contained' color='primary'>Book Now</Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="http://material-ui.com/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}
