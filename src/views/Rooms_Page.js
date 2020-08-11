import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'
import RoomsListItemComponents from "../components/Rooms_Components/Rooms_List_Item_Components";
import AppBarSpace from '../components/appBarSpace';
import Loading from '../components/loading'
import { getRooms, getRoomsWithPagination, getRoomWithTypePagination, clearFilter, getFilteredSearch, getFiltered } from '../redux/actions/roomActions'
import queryString from 'query-string'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//M-Ui
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';

import { MAP_API_KEY } from '../config/config' 
//Components 

import { Toolbar, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import Marker from '../static/icons/marker_2.svg'

const styles = makeStyles((theme) => ({
    root: {
        height: `calc(100vh - 128px)`,
        [theme.breakpoints.down('xs')]: {
            height: `calc(100vh - 156px)`,
        }
    },
    side_map_class: {
        padding: 12,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    map_class: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    side_room_class: {
        paddingLeft: 5,
        paddingRight: 5,
        '&::-webkit-scrollbar': {
            width: 0,
        },
        overflow: 'auto',
        width: '100%',
        maxHeight: 'calc(100vh - 130px)',
        [theme.breakpoints.down('xs')]: {
            maxHeight: 'calc(100vh - 160px)',

        }
    },
    marker: {
        // padding:1,
        '&:hover': {
            display: 'none'
        }
    }
}))

const RoomsPage = (props) => {
    const classes = styles()

    const [state, setState] = useState({
        loading: false
    })
    const history = useHistory()

    useEffect(() => {
        
        const {searchId, search, filter, price, type} = queryString.parse(props.location.search)
        if(search || filter){
            
            if(searchId !== "" && searchId && search === 'true'){
                if(filter === 'true'){
                    if(price && type){
                  
                        if(price !== "No Limit" && type !== "All Types"){
                              if(price === "Below 5k"){
                                  props.getFilteredSearch(searchId, "option_1", type)
     
                             }
                             if(price === "5k to 10k"){
                                  props.getFilteredSearch(searchId, "option_2", type)
                             }
                             if(price === "10k to 20k"){
                              props.getFilteredSearch(searchId, "option_3", type)
                             }
                             if(price === "above 20k"){
                              props.getFilteredSearch(searchId, "option_4", type)
                             }
                            
                        }
                        if(price === "No Limit" || type === "All Types"){
                            if(price === "No Limit" && type !== "All Types"){
                             props.getFilteredSearch(searchId, "", type)
                            }
                            if(price !== "No Limit" && type === "All Types"){
                                if(price === "Below 5k"){
                                     props.getFilteredSearch(searchId, "option_1", "")
                                 
                                }
                                if(price === "5k to 10k"){
                                     props.getFilteredSearch(searchId, "option_2", "")
                                }
                                if(price === "10k to 20k"){
                                 props.getFilteredSearch(searchId, "option_3", "")
                                }
                                if(price === "above 20k"){
                                 props.getFilteredSearch(searchId, "option_4", "")
                                }
                            }
                             
                        }
                     }
                }else{
                    props.getFilteredSearch(searchId, "", "")
                }
                
                
            } 


            if(search === 'false' && filter === "true"){
                console.log(price)
                if(price || type){

                    if(price !== "No Limit" && type !== "All Types"){
                        if(price === "Below 5k"){
                            props.getFiltered( "option_1", type)

                       }
                       if(price === "5k to 10k"){
                            props.getFiltered("option_2", type)
                       }
                       if(price === "10k to 20k"){
                        props.getFiltered("option_3", type)
                       }
                       if(price === "above 20k"){
                        props.getFiltered("option_4", type)
                       }
                      
                  }

                    if(price === "No Limit" || type === "All Types"){
                        if(price === "No Limit" && type !== "All Types"){
                         props.getFiltered("", type)
                        }
                        if(price !== "No Limit" && type === "All Types"){
                            if(price === "Below 5k"){
                                 props.getFiltered("option_1", "")
                             
                            }
                            if(price === "5k to 10k"){
                                 props.getFiltered( "option_2", "")
                            }
                            if(price === "10k to 20k"){
                             props.getFiltered("option_3", "")
                            }
                            if(price === "above 20k"){
                             props.getFiltered("option_4", "")
                            }
                        }
                         
                    }
                }
            }
        }
        if(!search && !filter){
            props.getRooms()
        }       
    },[])

    useEffect(() => {
        
    }, [])

    // componentWillReceiveProps(){
    //     if(props.room.rooms){
    //         setState({loading:false})
    //     }
    // }
    const handleApiLoaded = (map, maps) => {

    };


    const scrollCheck = event => {
        // console.log( parseInt(event.target.scrollHeight - event.target.scrollTop));
        // console.log(event.target.clientHeight-1);
        const bottom = parseInt(event.target.scrollHeight - event.target.scrollTop) <= event.target.clientHeight + 1;
        //    console.log(bottom);
        if (bottom) {
            // console.log('trigered');
            // console.log(props.room.roomsCount);
            if (props.room.filtered === false && props.room.searched === false && props.room.error === false) {
                console.log(props.room.roomsCount);
                // setState({loading:true})
                props.getRoomsWithPagination(props.room.roomsCount)
            }

        }
    };
console.log(props.room.rooms);
    let roomMarkUp = props.room.rooms != null ?
     props.room.rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room} />) 
     : <Loading />;
    const onMarkerClick = (id) => {
        history.push(`/rooms/${id}`)
    }
    const style = {
        width: '100%',
        height: '100%'
    }
    const c = {

        position: 'relative',
        width: '100%',
        height: '100%'
    }

    const poin = props.room.rooms ? props.room.rooms.map((marks, index) =>

        <Marker onClick={()=>onMarkerClick(marks.id)}
            name={'Dolores park'}
            zoom={15}
            position={{ lat: marks.lat, lng: marks.lng }} />
    ) : ""

    return (
        <div >
            <Toolbar />
            <AppBarSpace />
            <Grid container className={classes.root}  >

                <Grid md={7} item className={classes.side_room_class} onScroll={scrollCheck}>

                    {/* <RoomsComponents room={props.room} rooms={props.room.rooms} history={props.history} /> */}

                    {roomMarkUp}
                    {/* {state.loading && <CircularProgress/>} */}
                </Grid>

                <Grid md={5} item className={classes.side_map_class}>
 
                    <Map google={props.google} containerStyle={c} zoom={5}
                        style={style}
                        initialCenter={{
                            lat: 24.510084,
                            lng: 82.562385
                        }}
                    >
                        {poin}
                    </Map>

                </Grid>

            </Grid>
        </div>
    )
}

RoomsPage.PropType = {
    room: PropType.object.isRequired,
    getRooms: PropType.func.isRequired,
    classes: PropType.object.isRequired,
    getRoomWithTypePagination: PropType.func.isRequired,
    clearFilter: PropType.func.isRequired,
    getFilteredSearch:PropType.func.isRequired,
    getFiltered:PropType.func.isRequired
};
const mapState = (state) => ({
    room: state.room
});
const mapActionsToProps = {
    getRooms,
    getRoomsWithPagination,
    getRoomWithTypePagination,
    clearFilter,
    getFilteredSearch, 
    getFiltered
};
export default connect(mapState, mapActionsToProps)(GoogleApiWrapper({ apiKey: (MAP_API_KEY) })(RoomsPage))
