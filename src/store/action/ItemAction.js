import { GET_ITEM, ADD_ITEM, REMOVE_ITEM, INCREAMENT, DECREAMENT, DETAILS, TOTAL_ITEMS, BANNER } from "./ActionTypes";

// get item
export const getitem = () => {
    return {
        type: GET_ITEM
    }
}

// add to  cart

export const additemcart = (id) => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: id
    })
}


export const bannerclose = () => dispatch => {
    dispatch({
        type: BANNER
    })
}

export const removeitem = (id) => dispatch => {
    dispatch({
        type: REMOVE_ITEM,
        payload: id
    })
}

export const increamentcount = (id) => dispatch => {
    dispatch({
        type: INCREAMENT,
        payload: id
    })
}


export const decreament = (id) => dispatch => {
    dispatch({
        type: DECREAMENT,
        payload: id
    })
}

export const totalitems = () => dispatch => {
    dispatch({
        type: TOTAL_ITEMS
    })
}

// getdetails

export const getdetals = () => dispatch => {
    dispatch({
        type: DETAILS
    })
}