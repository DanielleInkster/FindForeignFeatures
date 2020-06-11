const initialState = {
    list: [], 
}

const reducer = (state = initialState, action) =>{
    const newState = {...state}

    if (action.type === 'MEDIA_LIST'){
        newState.list = action.val 
    }
    return newState
}

export default reducer;