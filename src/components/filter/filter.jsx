import React, { useState, useEffect } from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux'

import { makeStyles, Grid, TextField, IconButton, Button, Badge, InputAdornment, } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearAllIcon from '@material-ui/icons/ClearAll';


import { setSearchText, searchInit } from '../../redux/actions/searchAction'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchAutoComplete from "../search/searchAutoComplete";

const styles = makeStyles((theme) => ({

  select: {
    width: 290,
    marginLeft: 12,
    [theme.breakpoints.down('xs')]: {
      width: '50%'
    }
  },
}))

const Filter = (props) => {
  const sty = styles()

  var [count, setCount] = useState(0)

  useEffect(() => {
    var i = 0
    if (props.search.searchType !== "") {
      i = i + 1
    }
    if (props.search.searchWhom !== "") {
      i = i + 1
    }
    if (props.search.searchPrice !== "") {
      i = i + 1
    }
    if (props.search.searchRoomType !== "") {
      i = i + 1
    }
    if (props.search.searchFurnished !== "") {
      i = i + 1
    }
    console.log(i);
    setCount(i)
  }, [props.search.searchPrice, props.search.searchType, props.search.searchWhom, props.search.searchRoomType, props.search.searchFurnished,]);

  const clear = () => {
    props.setSearchText('')
    const data = {
      keyWord: "",
      type: props.search.searchType,
      whom: props.search.searchWhom,
      price: props.search.searchPrice,
      room: props.search.searchRoomType,
      furnished: props.search.searchFurnished,
    }
    props.searchInit(data, 0)
  }

  const handleSearchTextChange = (e) => {
    props.setSearchText(e.target.value)
  }

  const searchInit = () => {
    const data = {
      keyWord: props.search.searchText,
      type: props.search.searchType,
      whom: props.search.searchWhom,
      price: props.search.searchPrice,
      room: props.search.searchRoomType,
      furnished: props.search.searchFurnished,
    }

    props.searchInit(data)
    // history.push('/rooms')

  }

  return (
    <Grid container justify='space-around' alignItems='center'   >


      {/* <TextField margin='dense' className={sty.select}
        // autoFocus={!fullScreen}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            searchInit()
          }
        }}
        onChange={handleSearchTextChange}
        placeholder="Search Location"
        value={props.search.searchText}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={searchInit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      /> */}
      <SearchAutoComplete className={sty.select} />
      <IconButton onClick={searchInit}>
        <SearchIcon />
      </IconButton>
      {/* <IconButton onClick={clear}>
        <ClearAllIcon />
      </IconButton> */}
      <div style={{ flexGrow: 1 }}></div>
      <Button style={{ marginRight: 12 }} onClick={props.onFilter} startIcon={<FilterListIcon />} >
        <Badge color='error' badgeContent={count}>
          Filters
      </Badge>
      </Button>

    </Grid>
  )
};
Filter.propType = {
  search: PropType.object.isRequired,
  setSearchText: PropType.func.isRequired,
  searchInit: PropType.func.isRequired,

};

const mapState = (state) => ({
  search: state.search

});
const mapActionToProps = {

  setSearchText,
  searchInit

};
export default connect(mapState, mapActionToProps)(Filter)
