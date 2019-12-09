import * as types from './../constants/ActionTypes';

export function fetchSearchResults(search) {
  return function (dispatch) {
    dispatch(requestArticles(search));
    search = search.replace(' ', '_');
    return fetch('https://core.ac.uk:443/api-v2/articles/search/' + search + '?page=1&pageSize=100&metadata=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=4b5w1ZMhAfgeOtQTFURDWVmIuNjoq6kc').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function (json) {
      if (json.data.length > 0) {
        const searchResults = [];
        for (let i = 0; i < json.data.length; i++) {
          const newArticle = {
            coreId: json.data[i].id,
            author: json.data[i].authors[0],
            title: json.data[i].title,
            year: json.data[i].year,
            downloadUrl: json.data[i].downloadUrl
          };
          searchResults.push(newArticle);
        }
        dispatch(receiveSearchResults(searchResults));
      } else {
        console.log('No search results :(');
      }
    });
  };
}

export const requestArticles = search => ({
  type: types.REQUEST_ARTICLES,
  search
});

export const receiveSearchResults = searchResults => ({
  type: types.RECEIVE_SEARCH_RESULTS,
  searchResults
});