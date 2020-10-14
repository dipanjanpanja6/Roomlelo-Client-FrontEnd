import React, {  useEffect, } from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import RoomsListItemComponents from "../components/Rooms_Components/Rooms_List_Item_Components";

import {getRoomsWithFilterPagination, getRoomsWithPagination} from '../redux/actions/roomActions'
import { searchInit } from '../redux/actions/searchAction'
// import queryString from 'query-string'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
//M-Ui
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';

import { MAP_API_KEY } from '../config/config'
//Components 

import { Toolbar, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchNotFound from '../components/404/searchNotFound'
// import Marker from '../static/icons/marker_2.svg'

const styles = makeStyles((theme) => ({
    root: {
        height: `calc(100vh - 128px)`,
        [theme.breakpoints.down('xs')]: {
            height: `calc(100vh - 112px)`,
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

        overflow: 'auto',
        width: '100%',
        maxHeight: '100%',
        '&::-webkit-scrollbar': {
            width: 0,
        },
        // maxHeight: 'calc(100vh - 130px)',
        [theme.breakpoints.up('sm')]: {
            // maxHeight: 'calc(100vh - 160px)',
            '&::-webkit-scrollbar': {
                width: 12,
            },
            "&::-webkit-scrollbar-track": {
                background: '#f1f1f1'
            },
            "&::-webkit-scrollbar-thumb": {
                background: '#888'
            },
            "&::-webkit-scrollbar-thumb:hover": {
                background: '#000'
            },
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

    const history = useHistory()



    useEffect(() => {
        const data = {
            keyWord: props.search.searchText,
            type: props.search.searchType,
            whom: props.search.searchWhom,
            price: props.search.searchPrice,
            room: props.search.searchRoomType,
            furnished: props.search.searchFurnished,
        }
        props.searchInit(data)
    }, [])

    // componentWillReceiveProps(){
    //     if(props.room.rooms){
    //         setState({loading:false})
    //     }
    // }
    const handleApiLoaded = (map, maps) => {

    };


    const scrollCheck = event => {

        const bottom = parseInt(event.target.scrollHeight - event.target.scrollTop) <= event.target.clientHeight + 1;

        if (bottom) {

            if (props.room.error === false) {
                console.log(props.room.roomsCount);
                if (props.search.searchText === '' &&
                    props.search.searchType === '' &&
                    props.search.searchWhom === '' &&
                    props.search.searchPrice === '' &&
                    props.search.searchRoomType === '' &&
                    props.search.searchFurnished === '') {
                    console.log('trigger N');
                    props.getRoomsWithPagination(props.room.roomsCount)
                } else {
                    console.log('trigger F');
                    const data = {
                        keyWord: props.search.searchText,
                        type: props.search.searchType,
                        whom: props.search.searchWhom,
                        price: props.search.searchPrice,
                        room: props.search.searchRoomType,
                        furnished: props.search.searchFurnished,
                    }
                    props.getRoomsWithFilterPagination(data, props.room.roomsCount)
                }
            }

        }
    };

    let roomMarkUp = props.room.rooms != null ?
        props.room.rooms === "" ? <SearchNotFound /> :
            props.room.rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room} />)

        : <Grid style={{ textAlign: 'center' }}>
            <CircularProgress />
        </Grid>

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

        <Marker key={index} onClick={() => onMarkerClick(marks.id)}
            name={'Dolores park'}
            zoom={15}
            position={{ lat: marks.lat, lng: marks.lng }} />
    ) : ""

    return (
        <>
            <Toolbar />
            <Toolbar />
            <Grid container className={classes.root}  >

                <Grid md={7} item className={classes.side_room_class} onScroll={scrollCheck}>

                    {/* <RoomsComponents room={props.room} rooms={props.room.rooms} history={props.history} /> */}

                    {roomMarkUp}
                    {/* {state.loading && <CircularProgress/>} */}
                </Grid>

                <Grid md={5} item className={classes.side_map_class}>

                    <Map google={props.google} containerStyle={c} zoom={13}
                        style={style}
                        initialCenter={{
                            lat: 25.294909, 
                            lng: 82.982022
                        }}
                    >
                        {poin}
                    </Map>

                </Grid>

            </Grid>
        </>
    )
}

RoomsPage.PropType = {
    room: PropType.object.isRequired,
    search: PropType.object.isRequired,
    searchInit: PropType.func.isRequired,

    getRoomsWithPagination: PropType.func.isRequired,
    getRoomsWithFilterPagination: PropType.func.isRequired,
};
const mapState = (state) => ({
    room: state.room,
    search: state.search
});
const mapActionsToProps = {

    searchInit,
    getRoomsWithPagination,
    getRoomsWithFilterPagination
};
export default connect(mapState, mapActionsToProps)(GoogleApiWrapper({ apiKey: (MAP_API_KEY) })(RoomsPage))
