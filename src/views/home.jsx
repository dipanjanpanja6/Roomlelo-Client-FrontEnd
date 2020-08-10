import React, { useEffect } from "react";
import Footer from '../components/footer'
import SearchIcon from "@material-ui/icons/Search";
import Typing from 'react-typing-animation';

import {
  Grid, Typography,
  makeStyles,
  fade,
  Toolbar,
  ButtonBase,
  Button,
  Avatar,
  InputBase,
  Paper,
  TextField,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ReactComponent as Temple } from "../static/temple.svg";
import AnimatedNumber from "animated-number-react";
import Growth from "../components/ourGroth";
import Benefit from "../components/benefit";
import Testo from "../components/testo";
import { useState } from "react";
import SearchToolBar from "../components/search/searchTool";




const styles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default
  },
  FirstView: {
    padding: 20,
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column-reverse'
    }
  },
  FirstImg: { 
    [theme.breakpoints.down('xs')]:{
      maxHeight:250,
    }
  },
  fImg: { 
    [theme.breakpoints.down('xs')]:{
      height:300,
    }
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  avatar: {
    height: 60,
    width: 60
  },
  heading: {
    paddingTop: 15, fontWeight: 'bold', paddingRight: 0, 
    [theme.breakpoints.down('xs')]:{
      fontSize:'2rem'
    }
  },
search:{
  padding: '0 5%',
  [theme.breakpoints.down('xs')]:{
    padding: '29px 0 0'
  }
},


  temple: {
    paddingTop: 50,
    paddingBottom: 50,
    background: `url(${require('../static/templeCover.webp')})`,
    // backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // minHeight: 600,
    flexDirection: "column",
    // [theme.breakpoints.down('xs')]:{
    // height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`
    // }
  },
  offer: {
    padding: '50px 20px 0',

    // height: 420,
    flexDirection: "column",
  },
  image: {
    position: "relative",
    height: 250,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 200,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.grey[600],
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
      }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },

  growth: {
    height: 250,
    flexDirection: 'column'
  },
  growth2: {
    height: 300,
    // padding:'0 20px',
    flexDirection: 'column'
  },
  scroll: {
    '&::-webkit-scrollbar': {
      height: 0,
      backgroundColor: ' #F5F5F5'
    },
  },
  benefit: {
    flexDirection: 'row'
  },

  inputRoot: {
    color: "inherit",

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: 30,
    [theme.breakpoints.up('sm')]: {

      height: 30,
      width: '56vw',
      '&:focus': {
        width: '35ch',
      },
    },
  },
  m: {
    padding: '20px 40px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px',

    }
  },
  animatedNum: {
    paddingBottom: 12,
    fontSize: '3rem',
  },
  differentText: {
    margin: "24px 0", padding: '0 30px'
  }
}));
var f=require('../static/privet room.webp')
console.log(f);
const images = [
  {
    url: 'http://parisdesignagenda.com/wp-content/uploads/2017/08/zana-2.png',
    title: "Private Room",
    width: "30%",
  },
  {
    url: "https://www.digsdigs.com/photos/cool-shared-teen-boy-rooms-decor-ideas-20.jpg",
    title: "Shared Room",
    width: "30%",
  },
  {
    url: "https://trinitypoint.com.au/wp-content/uploads/2019/11/LOT-1306.jpg",
    title: "Entire House/Flat",
    width: "30%",
  },
];

const FirstView = (sty, b) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={sty.FirstView}
    >
      <Grid item sm={6}>
        <Typography variant="h3" className={sty.heading}>
          <Typing startDelay={12} speed={60}>
            Find Your Next
    </Typing>
          <Typing startDelay={1400} speed={60}>
            Perfect Place To
    </Typing>
          <Typing startDelay={3000} speed={60}>
            Live
    </Typing>
        </Typography>
        <Typography style={{ paddingTop: 25, }}>
          Roomlelo is an online service provider, catering house owners in managing their properties along with helping the tenants to find a perfect home for them
        </Typography>
        <Button variant='contained' onClick={b} color='primary' size="large" style={{ marginTop: 43, color: '#fff', paddingLeft: 50, paddingRight: 50 }}>
          Book Now
    </Button>
      </Grid>
      <Grid item sm={6} container justify='center' className={sty.FirstImg} >
        <img alt='House Search' className={sty.fImg} src={require('../static/House searching-rafiki 2.svg')} />
      </Grid>
    </Grid>

  )
}


function Home() {
  const history = useHistory();
  const sty = styles();
  var collections = (i) => {
    if (i==="Private Room") {
      history.push('/rooms?type=private')
    }
    if (i==="Shared Room") {
      history.push('/rooms?type=shared')
    }
    if (i==="Entire House/Flat") {
      history.push('/rooms?type=entire')
    }
  }

  var different = Array.apply(null, { length: 1 }).map((e, i) => (
    <>
      <Grid item sm={4} style={{ padding: 12 }}>
        <Typography
          variant="h4"
          style={{
            paddingTop: 15,
            paddingBottom: 44,
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          How we are different?
          </Typography>
        <Typography
          variant='subtitle1' color='primary'
          style={{
            paddingTop: 15,
            paddingBottom: 44,
            paddingRight: '20%',
          }}
        >
          It is a rental marketplace that deals with various rental issues, property management and providing legal assistance related to rental disputes.
          </Typography>
      </Grid>
      <Grid item container alignItems='center' sm={8}>


        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/esy booking.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Tenant App</b> - Detailed review and clarity of payments, services request, etc on your personal dashboard               </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >

          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/low sequrity.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Low Security deposit</b> - Worried about rocket high deposits ? We offer you home with min. security deposite            </Typography>
          </Grid>

        </Grid>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/No_brokerage 1.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>No Brokerage</b> - Save yourself from high brokerage and hidden charges
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/Safety_icon 1.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Safety and Security</b> - We filter properties which are in safe zone & healthy neighborhood        </Typography>
          </Grid>
        </Grid>


      </Grid>



    </>
  ));

  var six = Array.apply(null, { length: 1 }).map((e, i) => (
    <>
      <Grid item sm={4} style={{ padding: 12 }}>
        <Typography
          variant="h4"
          style={{
            paddingTop: 15,
            paddingBottom: 44,
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          What we offer
          </Typography>
        <Typography
          variant='subtitle1' color='primary'
          style={{
            paddingTop: 15,
            paddingBottom: 44,
          }}
        >
          It is a rental marketplace that deals with various rental issues, property management and providing legal assistance related to rental disputes.          </Typography>

      </Grid>
      <Grid item container alignItems='center' sm={8}>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >

          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/assisted visits.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Assisted visits</b> - Let us assist you to your exclusive home.
              </Typography>
          </Grid>

        </Grid>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/esy booking.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Easy booking -</b> sign up, fill your details, choose your desired home and pack up to relocate.
              </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/Legal_Assistance 1.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Legal assistance</b> - Ensure all agreements have been properly executed.
              </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick check.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Quality check</b> - We carefully review the quality of all the factors involved with your happy stay.
        </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick maintanence.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>Quick maintenance</b> - No embarrassing maintenance delays and inconvenience.
        </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sm={6}
          alignItems="center"
          style={{ margin: "24px 0" }}
        >
          <Grid alignItems="center" style={{ display: "flex" }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/24x7.svg')} />
            <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
              <b>24*7 helpline</b> - Always available to shoot your trouble.
        </Typography>
          </Grid>
        </Grid>

      </Grid>

    </>
  ));

  const bookNow = () => {
    history.push('/rooms')
  }

  return (
    <>
      <Grid className={sty.root}>
        <Toolbar />

        {FirstView(sty, bookNow)}
        <div className={sty.search}>
          <SearchToolBar />
        </div>

        <Grid
          container
          justify="center"
          alignItems="center"
          className={sty.offer}
        >

          <Grid container alignItems="center">
            {six}
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" style={{ paddingBottom: 30, paddingTop: 30 }}>
          <Grid xs={12} justify="center" container>
            <Typography
              variant="h4"
              style={{
                paddingTop: 15,
                paddingBottom: 64,
                // width: "100%",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Our collections
            </Typography>
          </Grid>
          {images.map((image) => (
            <ButtonBase onClick={() => collections(image.title)}
              focusRipple
              key={image.title}
              className={sty.image}
              focusVisibleClassName={sty.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={sty.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={sty.imageBackdrop} />
              <span className={sty.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={sty.imageTitle}
                >
                  {image.title}
                  <span className={sty.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </Grid>


        <Grid container justify="center" alignItems="center" className={sty.offer} >
          <Grid container alignItems="center">
            {different}
          </Grid>
        </Grid>

        <Growth />
        <Benefit />
        <Testo />
      </Grid>
      <Footer />
    </>
  );
}
export default Home