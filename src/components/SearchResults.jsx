import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ArticleList = ({ dispatch, searchResults }) => {
  return(
    <div>
      <h3>Search Results</h3>
      <br/>
      {Object.keys(searchResults).map(resultId => {
        let result = searchResults[resultId];
        return <li key={resultId}>
          {/* After lunch map this a result component! */}
          <a target="_blank" href={result.downloadUrl}><em>{result.title}</em></a> by {result.author}</li>;
      })}
    </div>
  );
};

ArticleList.propTypes = {
  searchResults: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let resultsArray = [];
  if (state.searchResults.length > 0) {
    resultsArray = state.searchResults;
  }
  return {
    searchResults: resultsArray
  };
};

export default connect(mapStateToProps)(ArticleList);