import constants from './../constants';
const { initialState, types } = constants;

const searchResultsReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case types.RECEIVE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      }
    default:
      return state;
  }
};

export default searchResultsReducer;