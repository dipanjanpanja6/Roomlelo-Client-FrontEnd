import {SET_ROOMS_DATA, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA, SET_SEARCH_DATA_ERROR,SET_ROOM_DETAILS,
    SET_SEARCH_DATA, SET_NOT_SEARCHED, SET_SEARCHED, SET_SEARCH_DATA_NULL, SET_DATA_WITH_TYPES, SET_NO_DATA_WITH_TYPES,
    SET_FILTER_WITH_TYPE_DATA, SET_FILTER_WITH_TYPE_DATA_ERROR, SET_FILTER_FOR_WHOM_DATA_NULL, SET_FILTERED,
    SET_LOCATIONS, SET_PAGINATION_LOCATIONS,SET_FILTER_ERROR_NULL,SET_FILTER_ERROR, SET_ROOM_PAGINATION_ERROR, SET_NOT_FILTERED, SET_SEARCH_TEXT_AUTO} from '../type'

import {url} from '../../config/config'

export const setSearchText = (search) => (dispatch) =>{
    dispatch({type:SET_SEARCH_TEXT_AUTO, payload:search})
}

export const filter = (price, type, forWhom) => (dispatch) =>{

}
export const search = (search, price, type, forWhom) => (dispatch) =>{
    dispatch({type:SET_FILTER_ERROR_NULL})
    if(search === "" && price === "" && type === "" && forWhom === ""){
        dispatch({type:SET_NOT_SEARCHED})
    }else{
        dispatch({type:SET_SEARCHED})
    }
    const filter = {
        price:price,
        type:type,
        forWhom:forWhom
    }
    fetch(`${url}/search/find/${search}`, {
        method:'POST',
        body:JSON.stringify(filter),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            if(data.success){
                dispatch({type:SET_ROOMS_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
            }
            if(data.error){
                dispatch({type:SET_FILTER_ERROR})
            }
        })
    })
    .catch((error) =>{
        
    })
}

export const getFiltered = (price, type) => (dispatch) =>{
    
    if(price === "" && type === ""){
        dispatch({type:SET_NOT_FILTERED})
    }else{
        dispatch({type:SET_FILTERED})
    }
    const filter = {
        price:price,
        type:type
    }
    fetch(`${url}/filter/get`, {
        method:'POST',
        body:JSON.stringify(filter),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_ROOMS_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
            }
            
        })
    })
    .catch((error) =>{
        console.log(error)
    })
}

export const getFilteredSearch = (search, price, type) => (dispatch) =>{

    if(search === "" && price === "" && type === ""){
        dispatch({type:SET_NOT_SEARCHED})
    }else{
        dispatch({type:SET_SEARCHED})
    }

    const filter = {
        price:price,
        type:type
    }
    
    
    fetch(`${url}/search/filter/${search}`, {
        method:'POST',
        body:JSON.stringify(filter),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_ROOMS_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
            }
            
        })
    })
    .catch((error) =>{
        console.log(error)
    })
};

export const clearFilter = () => (dispatch) =>{
    dispatch({type:SET_NO_DATA_WITH_TYPES})
    dispatch({type:SET_FILTER_FOR_WHOM_DATA_NULL})
    dispatch(getRooms())
}

export const getRoomDetails = (id) => (dispatch) =>{
    fetch(`${url}/room/details/${id}`, {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            
            dispatch({type:SET_ROOM_DETAILS, payload:data.data})
        })
    })
    .catch((error) =>{
        console.log(error)
    })
} 

export const getFilterSearchRooms = (data, search) => (dispatch) =>{
    const filter = {
        type:data.type,
        sort:data.sort,
        for:data.for
    }
    if(filter.type === "" && filter.sort === "" && filter.for === ""){
        dispatch(searchLocation(search))
        dispatch({type:SET_NOT_FILTERED})
    }else{
        dispatch({type:SET_FILTERED})
        fetch(`${url}/search/filter/room/${search}`, {
            method:'POST',
            body:JSON.stringify(filter),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then((response) =>{
            response.json()
            .then((data) =>{
                console.log(data)
                if(data.success){
                    dispatch({type:SET_ROOMS_DATA, payload:data.data})
                    dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
                    dispatch({type:SET_LOCATIONS, payload:data.location})
                   
                }
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    
    
}

export const getFilterRooms = (data) => (dispatch) =>{
    const filter = {
        type:data.type,
        sort:data.sort,
        for:data.for
    }
    
    if(filter.type === "" && filter.sort === "" && filter.for === ""){
        dispatch(getRooms())
        dispatch({type:SET_NOT_FILTERED})
    }else{
        dispatch({type:SET_FILTERED})
        fetch(`${url}/filter/room/list`, {
            method:'POST',
            body:JSON.stringify(filter),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then((response) =>{
            response.json()
            .then((data) =>{
                console.log(data)
                if(data.success){
                    dispatch({type:SET_ROOMS_DATA, payload:data.data})
                    dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
                    dispatch({type:SET_LOCATIONS, payload:data.location})
                   
                }
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    
    
}

export const getRoomWithForWhom = (forWhom) => (dispatch) =>{
    fetch(`${url}/filter/rooms/for/${forWhom}`, {
        method:'GET',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            if(data.success){
                dispatch({type:SET_ROOMS_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
               
            }
        })
    })
    .catch((error) =>{

    })
}

export const getRoomWithLowPrice = () => (dispatch) =>{
    fetch(`${url}/filter/rooms/price/low`, {
        method:'GET',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            
            if(data.success){
                dispatch({type:SET_ROOMS_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
               
            }
            if(data.error){
                
            }
        })
    })
}


export const getRoomWithHighPrice = () => (dispatch) =>{
    fetch(`${url}/filter/rooms/price/high`, {
        method:'GET',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_ROOMS_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
               
            }
            if(data.error){

            }
        })
    })
}

export const getRoomWithTypePagination = (type, count) => (dispatch) =>{
    
    fetch(`${url}/filter/rooms/type/${type}/pagination/${count}`, {
        method:'GET',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_ROOMS_PAGINATION_LIST_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload:count + data.data.length})
            }
        })
    }) 
    .catch((error) =>{

    })
}

export const getRoomWithType = (type) => (dispatch) =>{
    dispatch({type:SET_DATA_WITH_TYPES, payload:type})
    fetch(`${url}/filter/rooms/type/${type}`, {
        method:'GET',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_FILTER_WITH_TYPE_DATA, payload:data.data})
                dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
               
            }
            if(data.error){
                dispatch({type:SET_FILTER_WITH_TYPE_DATA_ERROR, payload:data})
            }
        })
    })
    .catch((error) =>{
        console.log(error)
    })
}

export const searchLocation = (text) => (dispatch) =>{
    if(text === ""){
        dispatch({type:SET_NOT_SEARCHED})
        dispatch(getRooms())
    }else{
        dispatch({type:SET_SEARCHED})
    }
    
    fetch(`${url}/search/properties/${text}`, {
        method:'POST',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_SEARCH_DATA, payload:data.data})
                dispatch({type:SET_LOCATIONS, payload:data.location})
            }
            if(data.error){
                dispatch({type:SET_SEARCH_DATA_ERROR, payload:data})
            }
        })
    })
    .catch((error) =>{console.log(error)})
}

export const getRooms = () => (dispatch) => {
    fetch(`${url}/room/list`, {
        method:'GET',
        headers:{

        }
    })
        .then((response) =>{
            response.json()
                .then((data) =>{
                    console.log(data)
                    if(data.success){
                        dispatch({type:SET_ROOMS_DATA, payload:data.data})
                        dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
                        
                    }
                })
                .catch((error) =>{})
        })
}

export const getRoomsWithPagination = (count) => (dispatch) =>{
    fetch(`${url}/room/list/pagination/${count}`, {
        method:'GET',
        headers:{

        }
    })
        .then((response) =>{
            response.json()
                .then((data) =>{
                    console.log(data);
                    if(data.success){
                        if(data.data.length !== 0){
                            dispatch({type:SET_ROOMS_PAGINATION_LIST_DATA, payload:data.data})
                            dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload:count + data.data.length})
                            dispatch({type:SET_PAGINATION_LOCATIONS, payload:data.location})
                        }
                        
                    }
                    if(data.error){
                        dispatch({type:SET_ROOM_PAGINATION_ERROR})
                    }
                    
                })
        })
        .catch((error) =>{})
}

