import { combineReducers } from 'redux';
import searchResultsReducer from './searchResultsReducer';
import articleListReducer from './articleListReducer';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  papersById: articleListReducer
});

export default rootReducer;