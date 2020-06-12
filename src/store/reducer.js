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
        console.log(action.val)
        newState.selection = action.val  
    }

    if (action.type === 'KEYWORDS') {
        newState.allKeywords = action.val[0]
    }

    if (action.type === 'RECOMMENDATIONS') {
        newState.recommendations = action.val
    }

    return newState
}

export default reducer;