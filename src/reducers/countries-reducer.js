import { GET_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = { //inicjalny stan naszej aplikacji
    countries: countriesData
};

const countriesReducer = function (state = initialState, action) {  //wartość domyślna = initial state
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})
    default:
    	return state;
    }
};

export default countriesReducer;