import {
    HEALTHCHECK_REQUEST,
    HEALTHCHECK_SUCCESS,
    HEALTHCHECK_FAILURE,
} from '../constants/actionTypes';


const initialState = {
    date:[],
}

const healthCheckReducer = (state = initialState , action) =>{
    switch(action.type){
        case HEALTHCHECK_REQUEST:
            return{
                ...state,
                loading:true
            }
        case HEALTHCHECK_SUCCESS:
            return{
                ...state,
                date: action.payload,
            }
        case HEALTHCHECK_FAILURE:
            return{
                ...state,
                error:'Somthing went wrong'
            }
        default:
            return state
    }
}

export default healthCheckReducer;
