const initialState = {
    list: [], 
    selection:'',
    options:[]
}

const reducer = (state = initialState, action) =>{
    const newState = {...state}

    if (action.type === 'MEDIA_LIST'){
        newState.list = action.val 
    }
    if (action.type === 'SELECTION') {
        newState.selection = action.val  
    }

    if (action.type === 'OPTIONS') {
        newState.options = action.val
        console.log(action.val)
    }
    return newState
}

export default reducer;