import React, { Component } from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'
import RoomsListItemComponents from "../components/Rooms_Components/Rooms_List_Item_Components";
import GoogleMapReact from 'google-map-react';
import AppBarSpace from '../components/appBarSpace';

import { getRooms, getRoomsWithPagination, getRoomWithTypePagination, clearFilter } from '../redux/actions/roomActions'

//M-Ui
import Grid from '@material-ui/core/Grid'

import { MAP_API_KEY } from '../config/config'
//Components 
 
import { Toolbar } from '@material-ui/core';

const style = (theme) => ({
    root: {
        height: `calc(100vh - 128px)`,
        [theme.breakpoints.down('xs')]:{
        height: `calc(100vh - 156px)`,}
    },
    side_map_class: {
        padding: 12,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    side_room_class: {
        paddingLeft: 5,
        paddingRight: 5,
        '&::-webkit-scrollbar': {
            width: 0,
        },
        overflow: 'auto',
        maxHeight: 'calc(100vh - 130px)',
        [theme.breakpoints.down('xs')]: {
            maxHeight: 'calc(100vh - 160px)',

        }
    },
})

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class RoomsPage extends Component {
    static defaultProps = {
        center: {
            lat: 22.5726,
            lng: 88.3639
        },
        zoom: 11
    };
    componentWillMount() {
        this.props.getRooms()
    }
    handleApiLoaded = (map, maps) => {

    };
    render() {
        const { classes } = this.props

        const scrollCheck = event => { 
            const bottom = parseInt(event.target.scrollHeight - event.target.scrollTop) === event.target.clientHeight-1;
            if (bottom) {
                console.log('bottmmmm')
                if (this.props.room.searched === false || this.props.room.withType === "") {
                    this.props.getRoomsWithPagination(this.props.room.roomsCount)
                }
                if(this.props.room.withType !== ""){
                    this.props.getRoomWithTypePagination(this.props.room.withType, this.props.room.roomsCount)
                }
            }
        };

        let roomMarkUp = this.props.room.rooms != null ? this.props.room.rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room} />) : "loading";


        return (
            <div >
                <Toolbar />
                <AppBarSpace />
                <Grid container className={classes.root}  >

                    <Grid sm={7} item className={classes.side_room_class} onScroll={scrollCheck}>

                        {/* <RoomsComponents room={this.props.room} rooms={this.props.room.rooms} history={this.props.history} /> */}

                        {roomMarkUp}
                    </Grid>

                    <Grid sm={5} item className={classes.side_map_class}>

                        <GoogleMapReact
                            bootstrapURLKeys={{ key: MAP_API_KEY }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>

                    </Grid>

                </Grid>
            </div>
        )
    }
}
RoomsPage.PropType = {
    room: PropType.object.isRequired,
    getRooms: PropType.func.isRequired,
    classes: PropType.object.isRequired,
    getRoomWithTypePagination:PropType.func.isRequired,
    clearFilter:PropType.func.isRequired
};
const mapState = (state) => ({
    room: state.room
});
const mapActionsToProps = {
    getRooms,
    getRoomsWithPagination,
    getRoomWithTypePagination,
    clearFilter
};
export default connect(mapState, mapActionsToProps)(withStyles(style)(RoomsPage))
