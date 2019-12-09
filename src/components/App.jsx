import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import ArticleList from './ArticleList';
import 'materialize-css/dist/css/materialize.min.css';

function App(){
  return(
    <div className='container'>
      <Header/>
      <SearchForm/>
      <ArticleList/>
    </div>
  );
}

export default App;