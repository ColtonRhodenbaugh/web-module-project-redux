import { combineReducers } from 'redux';
import { addMovie } from '../actions/movieActions';
import favoritesReducer from './favoritesReducer';

import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
})


export default rootReducer;