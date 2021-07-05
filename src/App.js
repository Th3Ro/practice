import './App.css';
import searchImage from './static/images/magnifier.png';
import NewsComponent from './components/NewsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={searchImage} alt="Search" className="search-image"></img>
        <input type="search" className="search-field" placeholder="Поиск"></input>
      </header>
      <div className="news">
        <NewsComponent/>
        <NewsComponent/>
      </div>
    </div>
  );
}

export default App;
