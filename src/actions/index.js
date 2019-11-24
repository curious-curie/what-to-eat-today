
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
    let url = `https://cors-anywhere.herokuapp.com/openapi.naver.com/v1/search/local?query=${searchWord}`;
    let headers =  {
        'X-Naver-Client-Id':'TLSmE3Saibvfac9WIqZd',
        'X-Naver-Client-Secret': 'rPPCt9ih13',
    };

    return (dispatch) => {
        dispatch(searchPlacesStart());
        // axios.get(url, { headers: headers})
        // .then( res => {
        //    console.log(res);
        //    console.log("TEST")
        // })
        // .catch(err => console.log(err))
        axios.get(`http://localhost:5000/api/search?query=${searchWord}`, {
            headers: {"Access-Control-Allow-Origin": "*",}
        })
        .then(res => {console.log(res.data.items)
        dispatch(searchPlacesSuccess(res.data.items))});
        
    }
}