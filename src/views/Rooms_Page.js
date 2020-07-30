import React, { Component } from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'
import Filter from '../components/filter/filter'
import GoogleMapReact from 'google-map-react';

import { getRooms, getRoomsWithPagination } from '../redux/actions/roomActions'

//M-Ui
import Grid from '@material-ui/core/Grid'

import { MAP_API_KEY } from '../config/config'
//Components
import RoomsComponents from "../components/Rooms_Components/Rooms_Components";
import { Toolbar } from '@material-ui/core';
const style = (theme) => ({
    root: {
        height: `calc(100vh - 64px)`,
    },
    side_map_class: {
        padding: 12,
        width: '100%'
    },
    side_room_class: {
        paddingLeft: 5,
        paddingRight: 5,
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
        return (
            <div >
                <Toolbar />
                <Grid container className={classes.root} >

                    <Grid sm={7} item className={classes.side_room_class}>
                        <Filter />
                        <RoomsComponents room={this.props.room} rooms={this.props.room.rooms} history={this.props.history} />
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
    classes: PropType.object.isRequired
};
const mapState = (state) => ({
    room: state.room
});
const mapActionsToProps = {
    getRooms
};
export default connect(mapState, mapActionsToProps)(withStyles(style)(RoomsPage))
