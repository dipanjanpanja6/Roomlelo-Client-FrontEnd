import React, { Component } from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'
import RoomsListItemComponents from "../components/Rooms_Components/Rooms_List_Item_Components";
import GoogleMapReact from 'google-map-react';
import AppBarSpace from '../components/appBarSpace';
import Loading from '../components/loading'
import { getRooms, getRoomsWithPagination, getRoomWithTypePagination, clearFilter } from '../redux/actions/roomActions'

//M-Ui
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';

import { MAP_API_KEY } from '../config/config'
//Components 
 
import { Toolbar } from '@material-ui/core';
import Marker from '../static/icons/marker_2.svg'

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
        width:'100%',
        maxHeight: 'calc(100vh - 130px)',
        [theme.breakpoints.down('xs')]: {
            maxHeight: 'calc(100vh - 160px)',

        }
    },
})

const AnyReactComponent = ({ text }) => <div><img height={25} width={25} src={Marker}/></div>;
class RoomsPage extends Component {
    constructor(){
        super()
        this.state={
            loading:false
        }
    }
    static defaultProps = {
        center: {
            lat: 20.5937,
            lng: 78.9629
        },
        zoom: 8
    };
     
    componentWillMount() {
        this.props.getRooms()
    }
    // componentWillReceiveProps(){
    //     if(this.props.room.rooms){
    //         this.setState({loading:false})
    //     }
    // }
    handleApiLoaded = (map, maps) => {

    };
    render() {
        const { classes } = this.props

        const scrollCheck = event => { 
            // console.log( parseInt(event.target.scrollHeight - event.target.scrollTop));
            // console.log(event.target.clientHeight-1);
            const bottom = parseInt(event.target.scrollHeight - event.target.scrollTop) <= event.target.clientHeight+1;
        //    console.log(bottom);
            if (bottom) {
                // console.log('trigered');
                // console.log(this.props.room.roomsCount);
                if (this.props.room.filtered === false && this.props.room.searched === false && this.props.room.error === false) {
                    console.log(this.props.room.roomsCount);
                    // this.setState({loading:true})
                    this.props.getRoomsWithPagination(this.props.room.roomsCount)
                }
                
            }
        };

        let roomMarkUp = this.props.room.rooms != null ? this.props.room.rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room} />) : <Loading/>;

        return (
            <div >
                <Toolbar />
                <AppBarSpace />
                <Grid container className={classes.root}  >

                    <Grid sm={7} item className={classes.side_room_class} onScroll={scrollCheck}>

                        {/* <RoomsComponents room={this.props.room} rooms={this.props.room.rooms} history={this.props.history} /> */}

                        {roomMarkUp}
                        {/* {this.state.loading && <CircularProgress/>} */}
                    </Grid>

                    <Grid sm={5} item className={classes.side_map_class}>

                        <GoogleMapReact
                            bootstrapURLKeys={{ key: MAP_API_KEY }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                        >
                            {this.props.room.locations ? this.props.room.locations.map((marks, index) => 
                            <AnyReactComponent lat={marks.lat}
                                lng={marks.lng}
                                text="My Marker" key={index}/>):""}
                            {/* <AnyReactComponent
                                lat={22.5726}
                                lng={88.3639}
                                text="My Marker"
                            />
                             <AnyReactComponent
                                lat={22.5726}
                                lng={88.3639}
                                text="My New Marker"
                            /> */}
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
