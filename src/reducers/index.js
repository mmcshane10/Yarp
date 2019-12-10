import { combineReducers } from 'redux';
import searchResultsReducer from './searchResultsReducer';
import articleListReducer from './articleListReducer';
import selectArticleReducer from './selectArticleReducer';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  papersById: articleListReducer,
  currentPaperId: selectArticleReducer
});

export default rootReducer;