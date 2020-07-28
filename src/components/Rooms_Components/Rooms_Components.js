import React from "react";
import RoomsListItemComponents from "./Rooms_List_Item_Components";

const RoomsComponents = (props) =>{
    const {rooms} = props

    let roomMarkUp = rooms != null ? rooms.map((room, index) => <RoomsListItemComponents key={index} index={index} room={room}/>):"loading";
    return(
        <div style={{ marginLeft:'2rem', marginRight:'2rem', marginTop:'5px'}}>
            {roomMarkUp}
        </div>
    )
};
export default RoomsComponents
