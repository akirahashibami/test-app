import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import TopPage from './TopPageContents/TopPage';
import BooksMainContainer from './BooksMainContainer';

const Top = () => {
  return(
    <div>
      <TopPage />
    </div>
  )
}

const Index = () => {
  return(
    <div>
      <BooksMainContainer />
    </div>
  )
}

const BookRoute = () =>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Top} />
        <Route path='/Index' exact component={Index} />
      </div>
    </BrowserRouter>
  )
}

export default BookRoute;
