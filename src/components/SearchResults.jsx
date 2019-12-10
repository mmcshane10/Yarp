import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectArticle } from './../actions';

const ArticleList = ({ dispatch, searchResults, currentPaperId }) => {
  let searchHeader = '';
  if (searchResults !== null){
    searchHeader = <div><h3>Search Results</h3><br/></div>
  } 
  return(
    <div>
      {searchHeader}
      {Object.keys(searchResults).map(resultId => {
        let result = searchResults[resultId];
        let resultInformation = '';
        if (result.coreId === currentPaperId) {
          resultInformation =
          <div>
            <p>{result.year}</p>
            <p>{result.description}</p>
            <a target="_blank" href={result.downloadUrl}>See article</a>
          </div>;
        }
        return <li 
        key={resultId} 
        onClick={() => {dispatch(selectArticle(result.coreId))}}>
      <em>{result.title}</em> by {result.author}{resultInformation}</li>;
      })}
    </div>
  );
};

ArticleList.propTypes = {
  searchResults: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let results = {};
  if (state.searchResults !== null) {
    results = state.searchResults;
  }
  return {
    searchResults: results,
    currentPaperId: state.currentPaperId
  };
};

export default connect(mapStateToProps)(ArticleList);