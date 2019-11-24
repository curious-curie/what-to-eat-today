const searchReducer = (
    state = {
        places: [],
        isLoading: false,
    }, action ) => {
        switch(action.type){
            case 'SEARCH_PLACES_START':
                return {
                    ...state,
                    isLoading: true,
                }
            case 'SEARCH_PLACES_SUCCESS':
                return {
                    places: action.places,
                    isLoading: false,
                }
            default: return state;
        }

        
    }

    export default searchReducer;