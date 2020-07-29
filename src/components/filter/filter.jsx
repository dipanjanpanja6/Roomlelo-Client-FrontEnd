import React from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux' 
import { getRoomsWithPagination } from '../../redux/actions/roomActions'
import { makeStyles, Grid, TextField, InputBase,fade } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


const styles = makeStyles((theme) => ({
    scroll: {
        '&::-webkit-scrollbar': {
            // width: 0,
            // backgroundColor: ' #F5F5F5'
        },
    },
    select:{
        width:120,
        [theme.breakpoints.down('xs')]:{
            width:'33%'
        }
    },
    search:{
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.10),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.20),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
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
        [theme.breakpoints.up('sm')]: {
          width: '15ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
}))

const RoomsComponents = (props) => { 
const sty= styles()


  
    return (
      <Grid container justify='space-around' alignItems='center' style={{padding:'10px 0'}}>

          <div className={sty.search}>
            <div className={sty.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              //  onFocus={handleFocus}
              placeholder="Search…"
              classes={{
                root: sty.inputRoot,
                input: sty.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              />

          </div>

          <div style={{flexGrow:1}}></div>
          
          <TextField select variant='outlined' margin='dense'
          label="For Whom" className={sty.select}
          >
              
          </TextField>
          <TextField select className={sty.select} variant='outlined' margin='dense'
          label="Near by"
          >

          </TextField>
          <TextField select className={sty.select} variant='outlined' margin='dense'
          label="Type"
          >

          </TextField>
      </Grid>
    )
};
RoomsComponents.propType = {
    getRoomsWithPagination: PropType.func.isRequired,

};

const mapState = (state) => ({

});
const mapActionToProps = {
    getRoomsWithPagination
};
export default connect(mapState, mapActionToProps)(RoomsComponents)
