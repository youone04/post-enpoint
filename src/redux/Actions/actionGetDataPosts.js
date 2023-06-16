import axios from 'axios';

export const actionGetDataPosts = () => async(dispatch) => {
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: 'GET_DATA_POST_SUCCESS',
            payload: data
        })
    }catch(e){
        dispatch({
            type: 'GET_DATA_POST_FAILED',
            payload: e.message
        })
    }
}