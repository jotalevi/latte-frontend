import "./style.css";

import React, { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";

import BackendApis from "../../utils/BackendApis";
import HomePageCarruosel from "../../components/HomePageCarruosel";
import AnimeContentRow from "../../components/AnimeContentRow";
import AnimeContentGrid from "../../components/AnimeContentGrid";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let _userData = await BackendApis.getUserData();
      let _pageData = await BackendApis.getHomePage();

      let _favs = [];
      for (const anime of _pageData.bookmark) {
        _favs.push(anime.anime);
      }

      setPageData({ user: _userData, page: _pageData, favs: _favs });
    } catch (error) {
      navigate("/login");
    }
  };

  return (
    <div className="full-screen-div-home">
      {pageData.user ? (
        <>
          <NavBar
            showUserMenus={true}
            userTick={pageData.user.username.slice(0, 2).toUpperCase()}
          />
          <div className="home-page-scree-flex">
            <HomePageCarruosel />

            <div className="subts-text">Continue Watching</div>
            <AnimeContentRow
              skeleton={false}
              cardsData={pageData.page.continue}
              favorites={pageData.favs}
            />
            <div className="subts-text">Bookmarks</div>
            <AnimeContentRow
              skeleton={false}
              cardsData={pageData.page.bookmark}
              favorites={pageData.favs}
            />

            <div className="subts-text">Explore</div>
            <AnimeContentGrid
              skeleton={false}
              cardsData={pageData.page.results}
              favorites={pageData.favs}
            />
          </div>
        </>
      ) : (
        <>
          <NavBar />

          <div className="home-page-scree-flex">
            <HomePageCarruosel skeleton={true} />
            <AnimeContentGrid skeleton={true} />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
