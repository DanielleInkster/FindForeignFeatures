const initialState = {
    list: [], 
<<<<<<< HEAD
    selection:'',
    options:[]
=======
    selection:''
>>>>>>> parent of 65db223... Keywords moved to store
}

const reducer = (state = initialState, action) =>{
    const newState = {...state}

    if (action.type === 'MEDIA_LIST'){
        newState.list = action.val 
    }
    if (action.type === 'SELECTION') {
<<<<<<< HEAD
        newState.selection = action.val  
    }

    if (action.type === 'OPTIONS') {
        newState.options = action.val
=======
        newState.selection = action.val
>>>>>>> parent of 65db223... Keywords moved to store
        console.log(action.val)
    }
    return newState
}

export default reducer;