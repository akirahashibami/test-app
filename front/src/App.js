import React from 'react';

import MainContainer from './Components/MainContainer';
import BooksMainContainer from './Components/BooksComponents/BooksMainContainer';

import './App.css';

const App =()=> {
  return(
    <div>
      <MainContainer />
      <BooksMainContainer />
    </div>
  )
}

export default App;
