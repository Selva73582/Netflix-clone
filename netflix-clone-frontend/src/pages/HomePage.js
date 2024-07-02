import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';

const requests = {
  fetchTrending: 'http://localhost:5000/api/movies/trending',
  fetchTopRated: 'http://localhost:5000/api/movies/top-rated',
  fetchActionMovies: 'http://localhost:5000/api/movies/action',
  fetchComedyMovies: 'http://localhost:5000/api/movies/comedy',
  fetchHorrorMovies: 'http://localhost:5000/api/movies/horror',
  fetchRomanceMovies: 'http://localhost:5000/api/movies/romance',
  fetchDocumentaries: 'http://localhost:5000/api/movies/documentary',
};

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
