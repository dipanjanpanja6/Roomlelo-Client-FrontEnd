import React, { useState, useEffect } from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux'
import { getRoomsWithPagination } from '../../redux/actions/roomActions'
import { makeStyles, Grid, TextField, InputBase, fade, MenuItem, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import { searchLocation, getFilterSearchRooms,setFilteredData, search, filter, getFilterRooms, getRooms } from '../../redux/actions/roomActions'
import { useLocation, useHistory } from "react-router-dom";
import GAutoComplete from "../search/G Auto Complete";


const styles = makeStyles((theme) => ({
  scroll: {
    '&::-webkit-scrollbar': {
      // width: 0,
      // backgroundColor: ' #F5F5F5'
    },
  },
  select: {
    width: 110,
    marginLeft: 12,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,

      width: '33%'
    }
  },

  search: {
    position: 'relative',
    display: 'flex',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.black, 0.10),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.black, 0.20),
    // },
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('ls')]: {
      // marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('ls')]: {
      width: '100%'
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
    [theme.breakpoints.up('sm')]: {
      // width: '30ch',
      '&:focus': {
        // width: '35ch',
      },
    },
  },
}))

const Filter = (props) => {
  const sty = styles()
  let location = useLocation()
  let history = useHistory()
  const [search, setSearch] = useState("")
  const [type, setType] = useState("All Types")
  const [sort, setSort] = useState("Recommended Price")
  const [sortData, setSortData] = useState("")
  const [forWhom, setForWhom] = useState("Any")
  const [price, setPrice] = useState("No Limit")
  const [place, setPlace] = useState("")
  const [path, setPath] = useState("")
  const [priceData, setPriceData] = useState("")
  const [typeData, setTypeData] = useState("")
  const [forWhomData, setForWhomData] = useState("")
  const [placeId, setPlaceId] = useState("")
  
  
  const setPlaceIdData = (id) =>{
    if(id && id !== ""){
      setPlaceId(id)
    }
  }
  useEffect(() =>{
   const l = localStorage.getItem('search_data')
   if(l){
    const data = JSON.parse(l)

    setSearch(data.search !== "" ? data.search : "")
    setForWhom(data.forWhom !== "" ? data.forWhom : "Any")
    setType(data.type !== "" ? data.type : "All Types")
    setSort(data.sort !== "" ? data.sort === "low" ? "Price Low to High" : data.sort === "high" ? "Price High to Low" : "Recommended Price" :"Recommended Price")
   
    if(data.search !== ""){
     if(data.forWhom !== "" || data.sort !== "" || data.type !== ""){
       const filter = {
         type: data.type !== "" ? data.type : "",
         sort: data.sort !== "" ? data.sort:"",
         for: data.forWhom !== "" ? data.forWhom : ""
       }
       props.getFilterSearchRooms(filter, data.search)
     }else{
       props.searchLocation(data.search)
     }
     
    }
    if(data.search === ""){
      if(data.forWhom !== "" || data.sort !== "" || data.type !== ""){
       const filter = {
         type: data.type !== "" ? data.type : "",
         sort: data.sort !== "" ? data.sort:"",
         for: data.forWhom !== "" ? data.forWhom : ""
       }
       props.getFilterRooms(filter)
      }else{
       props.getRooms()
      }
    }
    if(data.search === "" && data.forWhom === "" && data.type === "" && data.sort === ""){
     props.getRooms()
    }
   }else{
    props.getRooms()
   }
   
  }, []);

  const handlePlaceClear = () =>{
    window.history.pushState("", "", `/rooms?search=false&filter=true&price=${price}&type=${type}&forWhom=${forWhom}`)
    setPlace("")
    setSearch("")
    setPlaceId("")
    const f = props.room.filterData
    const data = {
      searchId:"", 
      price:f.price, 
      type:f.type, 
      forWhom:f.forWhom,
      place:"",
      filtered:true
     }
    props.setFilteredData(data)
    if(f.filtered === true){
     
      if(f.forWhom !== "" &&  f.type !== "" && f.price !== ""){
        
        window.history.pushState("", "", `/rooms?search=false&filter=true&price=${f.price}&type=${type}&forWhom=${forWhom}`)
      }
      if(f.forWhom === "" && f.type !== "" && f.price !== ""){
        window.history.pushState("", "", `/rooms?search=false&filter=true&price=${f.price}&type=${type}`)
      }
      if(f.forWhom === "" && f.type === "" && f.price !== ""){
        window.history.pushState("", "", `/rooms?search=false&filter=true&price=${f.price}`)
      }
      if(f.forWhom !== "" && f.type === "" && f.price !== ""){
        window.history.pushState("", "", `/rooms?search=false&filter=true&price=${f.price}&forWhom=${forWhom}`)
      }
      if(f.forWhom !== "" && f.type === "" && f.price === ""){
        window.history.pushState("", "", `/rooms?search=false&filter=false&forWhom=${forWhom}`)
      }
      if(f.forWhom === "" && f.type === "" && f.price === ""){
        window.history.pushState("", "", `/rooms?search=false&filter=false`)
      }
      if(f.forWhom === "" && f.type !== "" && f.price === ""){
        window.history.pushState("", "", `/rooms?search=false&filter=true&type=${type}`)
      }
      if(f.forWhom !== "" &&  f.type !== "" && f.price === ""){
        
        window.history.pushState("", "", `/rooms?search=false&filter=true&type=${type}&forWhom=${forWhom}`)
      }
      
    }
  }

  const handleChange = (event) => {
    const l = localStorage.getItem('search_data')
   const da = JSON.parse(l)
   const data = {
    search:"",
    type:da.type,
    forWhom: da.forWhom,
    sort: da.sort 
}
  const j = JSON.stringify(data)
  localStorage.setItem('search_data', j)
  console.log({value:event.target.value})
  if(event.target.value === "" || !event.target.value){
    props.getRooms()
  }
    if (sort !== "" || type !== "" || forWhom !== "") {
      setSearch(event.target.value)
      const filter = {
        type: typeData,
        sort: sortData,
        for: forWhomData
      }
      props.getFilterSearchRooms(filter, event.target.value)
    } else {
      if(event.target.value === "" || !event.target.value){
        props.getRooms()
      }else{
        setSearch(event.target.value)
        props.searchLocation(event.target.value)
      }
      
    }

  }
  const handleFocus = () => {
    if (location.pathname !== '/rooms') {
      history.push('/rooms')
    }
  }

  const handleForWhomClick = (event) => {

    const l = localStorage.getItem('search_data')
   const da = JSON.parse(l)
   const data = {
    search:da.search,
    type:da.type,
    forWhom: "",
    sort: da.sort 
}
  const j = JSON.stringify(data)
  localStorage.setItem('search_data', j)
    
    //window.history.pushState("", "", `/rooms?search=true&searchId=${f.searchId}&place=${f.place}&filter=true&price=${f.price}&type=${type}`)
    if (event.target.id === "boys") {
      setForWhom("Boys")
      setForWhomData("Boys")
      if (search === "") {
        const filter = {
          type: typeData,
          sort: sortData,
          for: "Boys"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: typeData,
          sort: sortData,
          for: "Boys"
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "girls") {
      setForWhom("Girls")
      setForWhomData("Girls")
      if (search === "") {
        const filter = {
          type: typeData,
          sort: sortData,
          for: "Girls"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: typeData,
          sort: sortData,
          for: "Girls"
        }
        props.getFilterSearchRooms(filter, search)
      }

    }

    
    if (event.target.id === "family") {
      setForWhom("Family")
      setForWhomData("Family")
      if (search === "") {
        const filter = {
          type: typeData,
          sort: sortData,
          for: "Family"
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: typeData,
          sort: sortData,
          for: "Family"
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if(event.target.id === "none"){
      setForWhom("Any")
      setForWhomData("")

      if (search === "") {
        const filter = {
          type: typeData,
          sort: sortData,
          for: ""
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: typeData,
          sort: sortData,
          for: ""
        }
        props.getFilterSearchRooms(filter, search)
      }
    }
  }

  const handlePriceChange = (event) => {
    const l = localStorage.getItem('search_data')
   const da = JSON.parse(l)
   const data = {
    search:da.search,
    type:da.type,
    forWhom: da.forWhom,
    sort: ""
  }

  const j = JSON.stringify(data)
  localStorage.setItem('search_data', j)
    if (event.target.id === "low") {
      setSort("Price Low to High")
      setSortData("low")
      if (search === "") {
        const filter = {
          type: typeData,
          sort: "low",
          for: forWhomData
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: typeData,
          sort: "low",
          for: forWhomData
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "high") {
      setSort("Price High to Low")
      setSortData("high")
      if (search === "") {
        const filter = {
          type: typeData,
          sort: "high",
          for: forWhomData
        }
       props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: "high",
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "none") {
      setSort('')
      setSortData("")
      if (search === "") {
        const filter = {
          type: typeData,
          sort: "",
          for: forWhomData
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: type,
          sort: "",
          for: forWhom
        }
        props.getFilterSearchRooms(filter, search)
      }
    }
  }
  const handleTypeClick = (event) => {
    const l = localStorage.getItem('search_data')
    const da = JSON.parse(l)
    const data = {
     search:da.search,
     type:"",
     forWhom: da.forWhom,
     sort: da.sort
   }
 
   const j = JSON.stringify(data)
   localStorage.setItem('search_data', j)
    if (event.target.id === "Private_Rooms") {
      setType("Private Rooms")
      setTypeData("Private Rooms")
      if (search === "") {
        const filter = {
          type: "Private Rooms",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "Private Rooms",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterSearchRooms(filter, search)
      }


    }
    if (event.target.id === "Shared_Rooms") {
      setType("Shared Rooms")
      setTypeData("Shared Rooms")
      if (search === "") {
        const filter = {
          type: "Shared Rooms",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "Shared Rooms",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterSearchRooms(filter, search)
      }

    }
    if (event.target.id === "Entire_House") {
      setType("Entire House")
      setTypeData("Entire House")
      if (search === "") {
        const filter = {
          type: "Entire House",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "Entire House",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterSearchRooms(filter, search)
      }
    } 
    if (event.target.id === "none") {
      setType("All Types")
      setTypeData("")
      if (search === "") {
        const filter = {
          type: "",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterRooms(filter)
      } else {
        const filter = {
          type: "",
          sort: sortData,
          for: forWhomData
        }
        props.getFilterSearchRooms(filter, search)
      }
    }

  }
  const clear = () => {
    // setForWhom('')
    // setSearch("")
    // setSort("")
    // setType("")
    window.location = '/rooms'
  }
  const handlePiceClick=(event)=>{
    const f = props.room.filterData
    
    const data = {
      searchId:f.searchId, 
      price:"", 
      type:f.type, 
      forWhom:f.forWhom,
      place:f.place,
      filtered:true
     }
    props.setFilteredData(data)
    if(f.filtered === true){
     
      if(place !== "" &&  f.type !== "" && f.forWhom !== ""){
        
        window.history.pushState("", "", `/rooms?search=true&searchId=${f.searchId}&place=${f.place}&filter=true&forWhom=${forWhom}`)
      }
      if(place === "" && f.forWhom !== "" && f.type !== ""){
        window.history.pushState("", "", `/rooms?search=false&filter=true&forWhom=${forWhom}`)
      }
      if(place === "" && f.forWhom === "" && f.type !== ""){
        window.history.pushState("", "", `/rooms?search=false&filter=false`)
      }
      if(place !== "" && f.forWhom === "" && f.type !== ""){
        window.history.pushState("", "", `/rooms?search=true&searchId=${f.searchId}&place=${f.place}&filter=false`)
      }
      if(place !== "" && f.forWhom === "" && f.type === ""){
        window.history.pushState("", "", `/rooms?search=true&searchId=${f.searchId}&place=${f.place}&filter=false`)
      }
      if(place === "" && f.forWhom === "" && f.type === ""){
        window.history.pushState("", "", `/rooms?search=false&filter=false`)
      }
      if(place === "" && f.forWhom !== "" && f.type === ""){
        window.history.pushState("", "", `/rooms?search=false&filter=true&forWhom=${forWhom}`)
      }
      if(place !== "" &&  f.forWhom !== "" && f.type === ""){
        
        window.history.pushState("", "", `/rooms?search=true&searchId=${f.searchId}&place=${f.place}&filter=true&type=${type}`)
      }
      
    }

    if(event.target.id === "no_limit"){
      setPrice("No Limit")
      setPriceData("")
      if (placeId === "") {
        props.filter("", typeData, forWhomData)
      } else {
        props.search(placeId, "", typeData, forWhomData)
      }
    }
    if(event.target.id === "option_1"){
      setPrice("Below 5k")
      setPriceData("option_1")
      if (placeId === "") {
        props.filter("option_1", typeData, forWhomData)
      } else {
        props.search(placeId, "option_1", typeData, forWhomData)
      }
    }
    if(event.target.id === "option_2"){
      setPrice("5k to 10k")
      setPriceData("option_2")
      if (placeId === "") {
        props.filter("option_2", typeData, forWhomData)
      } else {
        props.search(placeId, "option_2", typeData, forWhomData)
      }
    }

    if(event.target.id === "option_3"){
      setPrice("10k to 20k")
      setPriceData("option_3")
      if (placeId === "") {
        props.filter("option_3", typeData, forWhom)
      } else {
        props.search(placeId, "option_3", typeData, forWhom)
      }
    }
    if(event.target.id === "option_4"){
      setPrice("above 20k")
      setPriceData("option_4")
      if (placeId === "") {
        props.filter("option_4", typeData, forWhom)
      } else {
        props.search(placeId, "option_4", typeData, forWhom)
      }
    }
  }
  return (
    <Grid container justify='space-around' alignItems='center'   >

      <div className={sty.search}>
          <div className={sty.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onInput={handleFocus}
          autoFocus
          onChange={handleChange}
          placeholder="Search…"
          classes={{
            root: sty.inputRoot,
            input: sty.inputInput,
          }}
          value={search}
          inputProps={{ 'aria-label': 'search' }}
        />
      <div style={{ flexGrow: 1 }}></div>


      <IconButton onClick={clear} style={{padding:5}}>
         {/* <HighlightOffIcon />  */}
        <ClearAllIcon />
        </IconButton>
        {/* <div style={{ minWidth: 300, width: '100%' }}>
          <GAutoComplete setPlaceIdData={setPlaceIdData} handleClear={handlePlaceClear} place={place}/>
        </div> */}
      </div>
      <div style={{ flexGrow: 1 }}></div>

      <TextField select margin='dense' defaultValue={forWhom}
        placeholder="For Whom" className={sty.select} value={forWhom}

      >
        <MenuItem onClick={handleForWhomClick} id="none" value="Any">Any</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="boys" value="Boys">Boys</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="girls" value="Girls">Girls</MenuItem>
        <MenuItem onClick={handleForWhomClick} id="family" value="Family">Family</MenuItem>


      </TextField>

      <TextField select className={sty.select} margin='dense'
        defaultValue={type}
        placeholder="Type" value={type}
      >
        <MenuItem onClick={handleTypeClick} id="none" value="All Types">All Types</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Private_Rooms" value="Private Rooms">Private rooms</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Shared_Rooms" value="Shared Rooms">Shared Rooms</MenuItem>
        <MenuItem onClick={handleTypeClick} id="Entire_House" value="Entire House">Entire house</MenuItem>
      </TextField>

      {/* <TextField select className={sty.select} margin='dense'
        defaultValue={price} value={price}
        placeholder="Sort by"
      >
        <MenuItem onClick={handlePiceClick} id="no_limit" value="No Limit">No Limit</MenuItem>
        <MenuItem onClick={handlePiceClick} id="option_1" value="Below 5k">Below 5k</MenuItem>
        <MenuItem onClick={handlePiceClick} id="option_2" value="5k to 10k">5k to 10k</MenuItem>
        <MenuItem onClick={handlePiceClick} id="option_3" value="10k to 20k">10k to 20k</MenuItem>
        <MenuItem onClick={handlePiceClick} id="option_4" value="above 20k">above 20k</MenuItem>
      </TextField> */}

      <TextField select className={sty.select} margin='dense'
        defaultValue={sort}
        placeholder="Sort by" value={sort}
      >
        <MenuItem onClick={handlePriceChange} id="none" value="Recommended Price">Recommended Price</MenuItem>
        <MenuItem id="low" onClick={handlePriceChange} value="Price Low to High">Price Low to High</MenuItem>
        <MenuItem id="high" onClick={handlePriceChange} value="Price High to Low">Price High to Low</MenuItem>
      </TextField>

    </Grid>
  )
};
Filter.propType = {
  getRoomsWithPagination: PropType.func.isRequired,
  searchLocation: PropType.func.isRequired,
  getFilterSearchRooms: PropType.func.isRequired,
  setFilteredData:PropType.func.isRequired,
  search:PropType.func.isRequired,
  filter:PropType.func.isRequired,
  getFilterRooms:PropType.func.isRequired,
  getRooms:PropType.func.isRequired

};

const mapState = (state) => ({
  room:state.room
});
const mapActionToProps = {
  getRoomsWithPagination,
  searchLocation,
  getFilterSearchRooms,
  setFilteredData,
  search,
  filter,
  getFilterRooms,
  getRooms
};
export default connect(mapState, mapActionToProps)(Filter)
