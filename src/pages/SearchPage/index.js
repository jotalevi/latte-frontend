import "./style.css";

import React, { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";

import BackendApis from "../../utils/BackendApis";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  let navigate = useNavigate();
  const [pageData, setPageData] = useState({});
  const [queryStr, setQueryStr] = useState("");

  const fetchData = async () => {
    try {
      let _userData = await BackendApis.getUserData();
      let _pageData = {};

      if (queryStr !== "") {
        _pageData = await BackendApis.getSearch(queryStr);
        console.log(_pageData);
      }

      setPageData({ user: _userData, page: _pageData });
    } catch (error) {
      let renewResult = await BackendApis.renewToken();

      if (!renewResult) {
        navigate("/login");
      }

      let _userData = await BackendApis.getUserData();
      let _pageData = {};

      if (!_userData || !_pageData) {
        navigate("/login");
      }

      setPageData({ user: _userData, page: _pageData });
    }
  };

  useEffect(() => {
    fetchData();
  }, [queryStr]);

  const onChange = async (event) => {
    setQueryStr(event.target.value);
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
            <div className="contain-input">
              <input
                className="search-input"
                value={pageData.queryStr}
                onChange={onChange}
                placeholder="Search..."
              />
            </div>
          </div>
        </>
      ) : (
        <NavBar />
      )}
    </div>
  );
}

export default SearchPage;
