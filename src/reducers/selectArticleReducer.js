import constants from './../constants';
const { initialState, types } = constants;

const selectArticleReducer = (state = initialState.currentPaperId, action) => {
  switch (action.type) {
    case types.SELECT_ARTICLE:
      return action.selectedArticle;
    default:
      return state;
  }
};

export default selectArticleReducer;