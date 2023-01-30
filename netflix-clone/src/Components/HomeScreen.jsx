import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../Functions/Request";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Row
        title="NETFIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
};

export default HomeScreen;
