import React,{Component} from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'

import {getRooms, getRoomsWithPagination} from '../redux/actions/roomActions'

//M-Ui
import Grid from '@material-ui/core/Grid'


//Components
import RoomsComponents from "../components/Rooms_Components/Rooms_Components";
const style = (theme) =>({

})
class RoomsPage extends Component{
    componentWillMount() {
        this.props.getRooms()
    }

    render() {
        return (
            <div>
                <Grid sm={12} container item>
                    <Grid sm={6} item>
                        <RoomsComponents rooms={this.props.room.rooms} history={this.props.history}/>
                    </Grid>
                    <Grid sm={6} item>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
RoomsPage.PropType = {
    room:PropType.object.isRequired,
    getRooms:PropType.func.isRequired
};
const mapState = (state) =>({
    room:state.room
});
const mapActionsToProps = {
    getRooms
};
export default connect(mapState, mapActionsToProps)(withStyles(style)(RoomsPage))
