import React,{Component} from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'

import GoogleMapReact from 'google-map-react';

import {getRooms, getRoomsWithPagination} from '../redux/actions/roomActions'

//M-Ui
import Grid from '@material-ui/core/Grid'

import {MAP_API_KEY} from '../config/config'
//Components
import RoomsComponents from "../components/Rooms_Components/Rooms_Components";
const style = (theme) =>({
    side_map_class:{
        height: '100%',
        width: '100%',
        // marginTop:theme.spacing(1.5),
        // marginBottom:theme.spacing(0.8),
        // marginLeft:'2rem',
        // marginRight:'2rem'
    }
})
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class RoomsPage extends Component{
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
        const {classes} = this.props
        return (
            <div >
                <Grid sm={12} container item >
                    <Grid sm={6} item>
                        <RoomsComponents rooms={this.props.room.rooms} history={this.props.history}/>
                    </Grid>
                    <Grid sm={6} item>
                        <div className={classes.side_map_class} style={{   }}>
                            <div style={{marginTop:12,

                                marginLeft:'2rem',
                                marginRight:'2rem', height:'87vh'}}>
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
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
RoomsPage.PropType = {
    room:PropType.object.isRequired,
    getRooms:PropType.func.isRequired,
    classes:PropType.object.isRequired
};
const mapState = (state) =>({
    room:state.room
});
const mapActionsToProps = {
    getRooms
};
export default connect(mapState, mapActionsToProps)(withStyles(style)(RoomsPage))
