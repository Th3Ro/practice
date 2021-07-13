import React, { useState, useEffect } from 'react';
import './App.css';
import searchImage from './static/images/magnifier.png';
import NewsComponent from './components/NewsComponent';
import NewsService from "./services/NewsService";

function App() {
  const [newses, setNews] = useState(0);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    setNews(NewsService.getNews().items);
  });

  const changeSearchField = (event) => {
    if (event.target.value !== ''){
      setsearchText(event.target.value);
    }
    else{
      setsearchText("");
    }
  }

  return (
    <div className="App">
      <header className="App-header" id="header">
        <div className="header-search">
          <img src={searchImage} alt="Search"></img>
          <input type="search" className="search-field" placeholder="Поиск" onChange={changeSearchField}></input>
        </div>
      </header>
      <div className="news">
        <div className="news-list">
          {Array.from(newses).filter(news => searchText === '' ? true : news.title.includes(searchText)).map((a) => 
            <NewsComponent key={a.id} newsObject={a}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
