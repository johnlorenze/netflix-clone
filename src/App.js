import './styles/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import User from './components/User';
import Row from './components/Row';
import requests from './services/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/user" />
          <Route path="/user">
            <User />
          </Route>
          <Route path="/browse">
            <Nav />
            <Banner />
            <Row
              title="Netflix Originals"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
