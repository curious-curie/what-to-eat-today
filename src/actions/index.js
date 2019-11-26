
import axios from 'axios';

export const searchPlacesStart = () => {
    return {
        type: 'SEARCH_PLACES_START'
    }
}

export const searchPlacesSuccess = (places) => {
    return {
        type: 'SEARCH_PLACES_SUCCESS',
        places 
    }
}
export const searchPlaces = (searchWord) => {
    console.log(searchWord)
  

    return (dispatch) => {
        dispatch(searchPlacesStart());
        // axios.get(url, { headers: headers})
        // .then( res => {
        //    console.log(res);
        //    console.log("TEST")
        // })
        // .catch(err => console.log(err))
        axios.get(`/api/search?query=${searchWord}`, {
            headers: {"Access-Control-Allow-Origin": "*",}
        })
        .then(res => {console.log(res.data.items)
        dispatch(searchPlacesSuccess(res.data.items))});
        
    }
}