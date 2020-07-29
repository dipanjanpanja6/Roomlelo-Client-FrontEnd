import React from "react";
import PropType from 'prop-types'
import {connect} from 'react-redux'
import RoomsListItemComponents from "./Rooms_List_Item_Components";
import {getRoomsWithPagination} from '../../redux/actions/roomActions'

const RoomsComponents = (props) =>{
    const {rooms} = props



    const scrollCheck = event => {
        //TODO
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        if (bottom) {

            props.getRoomsWithPagination(props.count)
        }
    };

    let roomMarkUp = rooms != null ? rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room}/>):"loading";

    return(
        <div onScroll={scrollCheck} style={{ marginLeft:'2rem', marginRight:'2rem', marginTop:'5px', overflow:'auto', maxHeight:'89vh'}}>
            {roomMarkUp}

        </div>
    )
};
RoomsComponents.propType = {
    getRoomsWithPagination:PropType.func.isRequired,

};

const mapState = (state) =>({

});
const mapActionToProps = {
    getRoomsWithPagination
};
export default connect(mapState, mapActionToProps)(RoomsComponents)
