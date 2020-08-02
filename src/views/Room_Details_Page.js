import React, { Component } from 'react'
import { connect } from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles";
import PropType from 'prop-types'

const style = (theme) =>({
    
})
class Romm_Details_Page extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}

Romm_Details_Page.PropType = {
    room: PropType.object.isRequired,
    
};
const mapState = (state) => ({
    room: state.room
});
const mapActionsToProps = {
    
};
export default connect(mapState, mapActionsToProps)(withStyles(style)(Romm_Details_Page))