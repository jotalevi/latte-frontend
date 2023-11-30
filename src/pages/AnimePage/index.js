import "./style.css";
import "./style_mobile.css";

import React, { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";

import BackendApis from "../../utils/BackendApis";
import { useParams } from "react-router-dom";
import AnimePageBanner from "../../components/AnimePageBanner";
import EpisodesGrid from "../../components/EpisodesGrid";
import { useNavigate } from "react-router-dom";

function AnimePage() {
  let params = useParams();
  let navigate = useNavigate();
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let _userData = await BackendApis.getUserData();
      let _pageData = await BackendApis.getAnime(params.anime_id);

      setPageData({ page: _pageData, user: _userData });
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
            <AnimePageBanner animeData={pageData.page} />
            <div className="subts-text">
              eps 1 - {pageData.page.episodes.length}{" "}
            </div>
            <EpisodesGrid
              animeId={pageData.page.anime}
              episodes={pageData.page.episodes}
            />
          </div>
        </>
      ) : (
        <NavBar />
      )}
    </div>
  );
}

export default AnimePage;
