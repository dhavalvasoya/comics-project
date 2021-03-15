import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Card } from "antd";
import { Link } from "react-router-dom";

import { comicsAPI } from "../redux/ComicsAction";
import Meta from "antd/lib/card/Meta";

function Dashboard() {
  const ComicsData = useSelector((state) => state.ComicsReducer.comicsData);
  const dispatch = useDispatch();
  const History = useHistory();

  const [pageScroll, setPageScroll] = useState(16);
  const [comicsScroll, setComicsScroll] = useState(1);
  const [loginStatus, setLoginStatus] = useState(true);

  const user = localStorage.getItem("user");
  let ticket = localStorage.getItem("token");
  const data = JSON.parse(user);

  //infinite Scrolling lo
  useEffect(() => {
    // if(token)
    dispatch(comicsAPI(pageScroll, comicsScroll));
  }, [pageScroll, comicsScroll]);

  const scrollTOEnd = () => {
    setPageScroll(pageScroll + 8);
    setComicsScroll(comicsScroll + 1);
  };

  window.onscroll = function () {
    let scrollingDown =  document.documentElement.scrollTop < document.documentElement.scrollHeight  - document.documentElement.clientHeight
  //  console.log(document.documentElement.scrollIntoView(),"into");
  console.log(scrollingDown,"scrollingDown");
  console.log( document.documentElement.scrollTop < document.documentElement.scrollHeight  - document.documentElement.clientHeight,"value");
  console.log(document.documentElement.scrollTop, "scrollTop ");
  console.log(document.documentElement.scrollHeight, "scrollHeight");
  console.log(document.documentElement.scrollTop < document.documentElement.scrollHeight  );
  console.log( document.documentElement.clientHeight,"clientHeight ");
    
    if (scrollingDown === false) {
      scrollTOEnd();
    }
    // if (document.documentElement.scrollHeight - window.scrollY === 907) {
    //   scrollTOEnd();
    // }
  };  

  const handleCardData = (id) => {
    let result = JSON.stringify(id);
    localStorage.setItem("data", result);
    console.log(id);
    History.push("/comicsdata");
  };

  // let ticket = localStorage.getItem("token");
  console.log(ticket, "ticket");
  // const userLogin = () => {
  if (ticket == null) {
    // debugger;
    setLoginStatus(true);
  }
  if (loginStatus === false) {
    return <Redirect to="/" />;
  }
  // };
  const logout = () => {
    return localStorage.clear();
    //  return <Redirect to="/" />
  };
  return (
    <>
      {" "}
      <div>
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
          <br />

          <Link
            to="/"
            onClick={() => logout()}
            className="btn btn-danger btn-lg d-none d-lg-inline-block ml-md-auto"
          >
            {" "}
            logout
          </Link>
        </header>
        <br />
        <div className="container-fluid">
          <div className="row">
            {ComicsData &&
              ComicsData.data &&
              ComicsData.data.results.map((val, index) => {
                return (
                  <>
                    <div className="col-md-3 p-4">
                      <Card
                        id={index}
                        onClick={() => {
                          handleCardData(val);
                        }}
                        style={{ width: "300px" }}
                        key={data.id}
                        cover={
                          <img
                            style={{ height: "300px" }}
                            alt="example"
                            src={
                              val.thumbnail.path + "." + val.thumbnail.extension
                            }
                          />
                        }
                      >
                        <Meta title={val.title} />
                      </Card>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
