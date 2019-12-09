import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import ArticleList from './ArticleList';

function App(){
  return(
    <div>
      <Header/>
      <SearchForm/>
      <ArticleList/>
    </div>
  );
}

export default App;