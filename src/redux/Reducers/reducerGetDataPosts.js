const INTITALSATE = {
    dataPost : {
        data: [],
        loading: true
    }
}

export const reducerGetDataPosts = (state = INTITALSATE , action ) => {
    switch(action.type){
        case 'GET_DATA_POST_SUCCESS':
            return {
                ...state,
                dataPost : {
                    data: action.payload,
                    loading: false
                }
            };
        case 'GET_DATA_POST_FAILED':
            return {
                ...state,
                dataPost : {
                    data: action.payload,
                    loading: false
                }
            };
        default: return state;
    }
}