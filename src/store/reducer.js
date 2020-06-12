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
        console.log(action.val[0])
        newState.allKeywords = action.val[0]
    }

    return newState
}

export default reducer;