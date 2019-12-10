import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import ArticleList from './ArticleList';
import 'materialize-css/dist/css/materialize.min.css';
import SearchResults from './SearchResults';

function App(){

  let colStyle = {
    padding: '50px'
  };
  return(
    <div style={colStyle}>
      <Header/>
      <div className='row'>
        <div style={colStyle} className='col s6'>
          <SearchForm/>
          <SearchResults />
        </div>
        <div style={colStyle} className='col s6'>
          <ArticleList/>
        </div>
      </div>
    </div>
  );
}

export default App;