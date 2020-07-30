import React from "react";
import PropType from 'prop-types'
import { connect } from 'react-redux'
import RoomsListItemComponents from "./Rooms_List_Item_Components";
import { getRoomsWithPagination } from '../../redux/actions/roomActions'
import { makeStyles } from "@material-ui/core";


const styles = makeStyles((theme) => ({
    scroll: {
        '&::-webkit-scrollbar': {
            width: 0,

            // backgroundColor: ' #F5F5F5'
        },
        overflow: 'auto',
        maxHeight: 'calc(100vh - 130px)',
        [theme.breakpoints.down('xs')]:{
            maxHeight: 'calc(100vh - 160px)',

        }
    }
}))

const RoomsComponents = (props) => {
    const { rooms } = props
    const sty = styles()


    const scrollCheck = event => {
        //TODO
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        if (bottom) {
            if(props.room.searched === false){
                props.getRoomsWithPagination(props.room.roomsCount)
            }
            
        }
    };

    let roomMarkUp = rooms != null ? rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room} />) : "loading";

    return (
        <div onScroll={scrollCheck} className={sty.scroll}
            style={{
                // marginLeft:'2rem', marginRight:'2rem', marginTop:'5px',

            }}
        >
            {roomMarkUp}

        </div>
    )
};
RoomsComponents.propType = {
    getRoomsWithPagination: PropType.func.isRequired,

};

const mapState = (state) => ({

});
const mapActionToProps = {
    getRoomsWithPagination
};
export default connect(mapState, mapActionToProps)(RoomsComponents)
