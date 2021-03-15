import React from "react";
import {  useHistory } from "react-router";

function ComicsDetails() {
  let History = useHistory();
  let comicsData = JSON.parse(localStorage.getItem("data"));

  const token = localStorage.getItem("token");
  let status = true;
  if (token === null) {
    console.log(status, "status");
    status = false;
  }

  if (status === false) {
    console.log(status, "status");
    return History.goBack("/");
  }
  const handleBack = () => {
    localStorage.removeItem("data");
    History.goBack("/dashboard");
  
  };
  if (!comicsData) {
    setTimeout(() => {
      return History.goBack("/dashboard")
    }, 200);
  }
 
  
  let creators = comicsData.creators.items;
  let price = comicsData.prices[0];
  return (
    <>
      <br />
      <div style={{ display: "flex" }}>
        <div>
          {" "}
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={() => handleBack()}
          >
            Go Back
          </button>
        </div>
        <div className="container">
          <img
            style={{ height: "500px", textAlign: "center" }}
            alt="example"
            src={
              comicsData.thumbnail.path + "." + comicsData.thumbnail.extension
            }
          />
        </div>
        <div className="container">
          <h1>comics Title: {comicsData.title}</h1>
          <br />
          <h2>Description:</h2>
          <h4>{comicsData.description}</h4>
          <br />
          <h3>comicsId : {comicsData.id}</h3>
          <br />
          <h3>comics price: {price.price}$</h3>
          <br />
          <h3>creators Name </h3>{" "}
          <ul>
            {creators&&creators.map((data) => (
              <li>
                <h4>{data.name}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ComicsDetails;
