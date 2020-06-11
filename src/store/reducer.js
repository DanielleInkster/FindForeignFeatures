const initialState = {
    list: [], 
    selection:'',
    allKeywords:[]
}

const reducer = (state = initialState, action) =>{
    const newState = {...state}

    if (action.type === 'MEDIA_LIST'){
        newState.list = action.val 
    }
    if (action.type === 'SELECTION') {
        newState.selection = action.val  
    }

    if (action.type === 'KEYWORDS') {
        newState.allKeywords = action.val
        console.log(action.val)
    }
    return newState
}

export default reducer;