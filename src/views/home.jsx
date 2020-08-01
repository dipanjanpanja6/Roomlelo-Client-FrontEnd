import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Footer from '../components/footer'
import clsx from 'clsx'
import SearchIcon from "@material-ui/icons/Search";

import {
  makeStyles,
  fade,
  Toolbar,
  ButtonBase,
  SvgIcon,
  Button,
  Avatar,
  Card,
  CardMedia,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ReactComponent as Temple } from "../static/temple.svg";
import Filter from '../components/filter/filter'
import AppBarSpace from "../components/appBarSpace";


const styles = makeStyles((theme) => ({

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
    backgroundColor: theme.palette.common.black,
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
  filter: {
    padding: '0 12px',
    [theme.breakpoints.up('sm')]: {
      height: 100,
      // backgroundColor: '#d54'
    }
  },

  search: {
    position: 'relative', 
    marginTop:20,
    borderRadius:30,
    backgroundColor: fade(theme.palette.common.white, 0.50),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.80),
    }, 
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('sm')]: { 
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    height:30,
    [theme.breakpoints.up('sm')]: {
      
      height:30,
      width: '56vw',
      '&:focus': {
        width: '35ch',
      },
    },
  },

}));

const images = [
  {
    url: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
    title: "Private Room",
    width: "30%",
  },
  {
    url: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Shared Room",
    width: "30%",
  },
  {
    url: "https://material-ui.com/static/images/grid-list/camera.jpg",
    title: "Entire House/Flat",
    width: "30%",
  },
];

export default function E4() {
  const history = useHistory();
  const sty = styles();

  var different = Array.apply(null, { length: 1 }).map((e, i) => (
    <>
      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Tenant app </b>- detailed review and clarity of payments , services requests, etc on your personal dashboard.        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Quick maintenance</b> - No embarrassing maintenance delays and inconvenience.        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>No brokerage</b> - Save yourself from high brokerage and hidden charges.        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Low security deposits</b> - Worried about rocket high deposits? We offer you home with min. Security deposit.        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Safety and security</b> - we filter properties which are in safe zone & healthy neighborhood for your well- being and protection.        </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>24*7 helpline</b> - Always available to shoot your trouble.
        </Typography>
        </Grid>
      </Grid>

    </>
  ));
  var six = Array.apply(null, { length: 1 }).map((e, i) => (
    <>
      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Assisted visits</b> - Let us assist you to your exclusive home.
        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Easy booking -</b> sign up, fill your details, choose your desired home and pack up to relocate.
        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Legal assistance</b> - Ensure all agreements have been properly executed.
        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Quality check</b> - We carefully review the quality of all the factors involved with your happy stay.
        </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>Quick maintenance</b> - No embarrassing maintenance delays and inconvenience.
        </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sm={4}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid alignItems="center" style={{ display: "flex" }}>
          <Avatar sizes="5">A</Avatar>
          <Typography variant="subtitle2" style={{ padding: "0 16px" }}>
            <b>24*7 helpline</b> - Always available to shoot your trouble.
        </Typography>
        </Grid>
      </Grid>

    </>
  ));
const bookNow=()=>{
  history.push('/rooms')
}
 
  return (
    <>
      <Grid className={sty.root} >
        <Toolbar /> 
        {/* <AppBarSpace/> */}







        <Grid
          container
          justify="center"
          alignItems="center"
          className={sty.temple}
        > 
          <Temple style={{ zIndex: 2 }} />
          <Typography variant="h3" style={{ paddingTop: 15, color: '#fff', fontWeight: 'bold', zIndex: 2, textAlign: 'center' }}>
            Live with the World
          </Typography>

          <div className={sty.search}>
        <div className={sty.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
           onFocus={bookNow}
          // onChange={handleChange}
          placeholder="Search…"
          classes={{
            root: sty.inputRoot,
            input: sty.inputInput,
          }}
          // value={search}
          inputProps={{ 'aria-label': 'search' }}
        />

      </div>


          <Button onClick={bookNow} variant='outlined' color='inherit' size="large" style={{ marginTop: 43, color: '#fff', zIndex: 2 }}>
            Book Now
          </Button>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
          className={sty.offer}
        >
          <Typography
            variant="h4"
            style={{
              paddingTop: 15,
              paddingBottom: 44,
              //   width: "100%",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            What we offer
          </Typography>

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
            <ButtonBase
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


        <Grid
          container
          justify="center"
          alignItems="center"
          className={sty.offer}
        >
          <Typography
            variant="h4"
            style={{
              paddingTop: 15,
              paddingBottom: 44,
              //   width: "100%",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            How we are different?
          </Typography>

          <Grid container alignItems="center">
            {different}
          </Grid>
        </Grid>


        <Grid
          container
          justify="center"
          alignItems="center"
          className={sty.offer}
        >
          <Typography
            variant="h4"
            style={{
              paddingTop: 15,
              paddingBottom: 44,
              textAlign: 'center',
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Our remarkable growth
          </Typography>

          <Grid container alignItems="center">
            <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
              <Typography variant='h3' style={{ paddingBottom: 12 }}>+1</Typography>
              <Typography variant='h5'>City</Typography>
            </Grid>
            <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
              <Typography variant='h3' style={{ paddingBottom: 12 }}>100+</Typography>
              <Typography variant='h5'>Property Owners</Typography>
            </Grid>
            <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
              <Typography variant='h3' style={{ paddingBottom: 12 }}>700+</Typography>
              <Typography variant='h5'>Customers</Typography>
            </Grid>
            <Grid container item xs={6} sm={3} alignItems="center" justify='center' className={sty.growth}>
              <Typography variant='h3' style={{ paddingBottom: 12 }}>2200+</Typography>
              <Typography variant='h5'>No. of Beds</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" className={clsx(sty.offer)}
        >
          <Typography
            variant="h4" style={{
              paddingTop: 15, paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Benefits of Listing with Us
          </Typography>

          <Grid container alignItems="center">
            <Grid item sm={6} style={{ padding: '20px 40px' }}>
              <Grid container item alignItems="center" justify='center' style={{textAlign:'center',color:'#fff', background: `url(${require('../static/rent.webp')})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className={clsx(sty.growth2, sty.benefit)}>
                <Typography variant='h4' style={{ paddingBottom: 12 }}>Rent on time</Typography>
                <Typography variant='body1'>No more monthly reminders, no more late payments</Typography>
              </Grid>
            </Grid>

            <Grid item sm={6} style={{ padding: '20px 40px' }}>
              <Grid container item alignItems="center" justify='center' style={{textAlign:'center', color:'#fff',background: `url(${require('../static/maintanence.png')})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={clsx(sty.growth2, sty.benefit)}>
                <Typography variant='h4' style={{ paddingBottom: 12 }}>Maintenance</Typography>
                <Typography variant='body1' >Good maintenance keeps your tenants happy and also preserve your assets.</Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid container justify="center" alignItems="center" className={sty.offer}
        >
          <Typography
            variant="h4" style={{
              paddingTop: 15, paddingBottom: 20, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Limited Period Offers
          </Typography>
          <Typography
            variant='body1' style={{
              paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Associate and grow with us. Be a proud part of our venture and get all the bnefits:-
          </Typography>

          <Grid container justify='center' alignItems="center" style={{ overflow: 'hidden',width:'auto' }}>
            <Grid container style={{ overflowX: 'scroll', flexWrap: 'nowrap' }} className={sty.scroll}>

              <Grid item style={{ padding: '20px 40px' }}>
                <Grid container item alignItems="center" justify='center' style={{ background: `aliceblue`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 300 }} className={sty.growth2}>
                  <Typography variant='h4' style={{ paddingBottom: 12 }}>Free Stay offer</Typography>
                </Grid>
              </Grid>

              <Grid item style={{ padding: '20px 40px' }}>
                <Grid container item alignItems="center" justify='center' style={{ background: `aliceblue`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 300 }} className={sty.growth2}>
                  <Typography variant='h4' style={{ paddingBottom: 12 }}>Free Stay offer</Typography>
                </Grid>
              </Grid>

              <Grid item style={{ padding: '20px 40px' }}>
                <Grid container item alignItems="center" justify='center' style={{ background: `aliceblue`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 300 }} className={sty.growth2}>
                  <Typography variant='h4' style={{ paddingBottom: 12 }}>Know More</Typography>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" className={sty.offer}
        >
          <Typography
            variant="h4" style={{
              paddingTop: 15, paddingBottom: 20, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant='body1' style={{
              paddingBottom: 44, textAlign: 'center', fontWeight: "bold", fontFamily: "Poppins, sans-serif",
            }}
          >
            Know why our Clients, believe and love us
          </Typography>

          <Grid container alignItems="center" justify='center'>
            <Grid item sm={6} style={{ padding: '20px 40px' }}>
              <Grid container item alignItems="center" justify='center' style={{ background: 'aliceblue', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className={sty.growth2}>
                <Typography variant='h4' style={{ paddingBottom: 12, textAlign: 'center' }}>“Know why our Customer love us”</Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
      <Footer />
    </>
  );
}
