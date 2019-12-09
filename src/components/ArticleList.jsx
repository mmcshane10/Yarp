import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ArticleList = ({ dispatch, articleList }) => {
  return(
    <div>
      <h3>My Articles</h3>
      <br/>
      {Object.keys(articleList).map(articleId => {
        let article = articleList[articleId];
        return <li key={articleId}>
        <a target="_blank" href={article.downloadUrl}><em>{article.title}</em></a> by {article.author}</li>;
      })}
    </div>
  );
};

ArticleList.propTypes = {
  articleList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    articleList: state.papersById
  };
};

export default connect(mapStateToProps)(ArticleList);