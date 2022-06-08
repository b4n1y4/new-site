import React from "react";
import volunteers from "./volunteerList";
import Footer from "./Footer";

const Volunteers = () => {
  return (
    <>
      <div className="page-content volunteers">
        <h1 className="title">
          Volunteers <br />
          ---
        </h1>
        <div className="vol-container">
          {volunteers.map((volunteer) => {
            return (
              <div className="card volunteer" key={volunteer.name}>
                <img
                  src={volunteer.imgURL}
                  alt={volunteer.name}
                  className="avatar"
                />
                <p className="name">{volunteer.name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Volunteers;
