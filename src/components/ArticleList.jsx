import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectArticle } from './../actions';

const ArticleList = ({ dispatch, articleList, currentPaperId }) => {
  const currentPaper = articleList[currentPaperId]
  return(
    <div>
      <h3>My Articles</h3>
      <br/>
      {Object.keys(articleList).map(articleId => {
        let article = articleList[articleId];
        let articleInformation = '';
        if (article.coreId === currentPaperId) {
          articleInformation =
          <div>
            <p>{article.year}</p>
            <p>{article.description}</p>
            <a target="_blank" href={article.downloadUrl}>See article</a>
          </div>;
        }
        return <li 
          key={articleId} 
          onClick={() => {dispatch(selectArticle(article.coreId))}}>
        <em>{article.title}</em> by {article.author}{articleInformation}</li>;
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
    articleList: state.papersById,
    currentPaperId: state.currentPaperId
  };
};

export default connect(mapStateToProps)(ArticleList);