import React, { useState, useEffect } from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux'

import { makeStyles, Grid, IconButton, Button, Badge, SvgIcon } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {ReactComponent as Filters} from '../../static/icons/filter.svg'

import { searchInit } from '../../redux/actions/searchAction'
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



      <SearchAutoComplete className={sty.select} />
      <IconButton onClick={searchInit}>
        <SearchIcon />
      </IconButton>
      <div style={{ flexGrow: 1 }}></div>
      <Button style={{ marginRight: 12 }} onClick={props.onFilter} startIcon={<SvgIcon><Filters /></SvgIcon>} >
        <Badge color='error' badgeContent={count}> 
            Filters
      </Badge>
      </Button>

    </Grid >
  )
};
Filter.propType = {
  search: PropType.object.isRequired,
  searchInit: PropType.func.isRequired,

};

const mapState = (state) => ({
  search: state.search

});
const mapActionToProps = {
  searchInit

};
export default connect(mapState, mapActionToProps)(Filter)
