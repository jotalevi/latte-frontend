import "./style.css";

import React, { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";

import BackendApis from "../../utils/BackendApis";
import { useParams } from "react-router-dom";
import AnimePlayBanner from "../../components/AnimePlayBanner";
import { useNavigate } from "react-router-dom";

function DevPage() {
  let navigate = useNavigate();
  let params = useParams();

  const [pageData, setPageData] = useState({});

  const fetchData = async () => {
    try {
      let _userData = await BackendApis.getUserData();
      let _pageData = await BackendApis.getEpisode(
        params.anime_id,
        params.episode_id
      );

      setPageData({ page: _pageData, user: _userData });
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="full-screen-div-home">
      {pageData.user ? (
        <>
          <NavBar
            showUserMenus={true}
            userTick={pageData.user.username.slice(0, 2).toUpperCase()}
          />
          <div className="home-page-scree-flex">
            <AnimePlayBanner animeData={pageData.page} />
          </div>
        </>
      ) : (
        <NavBar />
      )}
    </div>
  );
}

export default DevPage;
