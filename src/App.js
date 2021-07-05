import './App.css';
import searchImage from './static/images/magnifier.png';
import NewsComponent from './components/NewsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="header">
        <div className="header-search">
          <img src={searchImage} alt="Search"></img>
          <input type="search" className="search-field" placeholder="Поиск"></input>
        </div>
      </header>
      <div className="news">
        <div className="news-list">
          <NewsComponent/>
          <NewsComponent/>
          <NewsComponent/>
          <NewsComponent/>
          <NewsComponent/>
          <NewsComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
