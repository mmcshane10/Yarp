import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ArticleList = ({ dispatch, articleList }) => {
  return(
    <div>
      <h3>Search Results</h3>
      <br/>
      {Object.keys(searchResults).map(resultId => {
        let result = searchResults[resultId];
        return <li key={resultId}>
          {/* After lunch map this a result component! */}
          <em>{result.title}</em> by {result.author}</li>;
      })}
    </div>
  );
};

ArticleList.propTypes = {
  searchResults: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};

export default connect(mapStateToProps)(ArticleList);