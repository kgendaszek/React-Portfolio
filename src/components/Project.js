import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Project({ image, title, description, gitHub, deployed }) {
  return (
    <div className="card col-md-4">
      {/* <img className="card-img-top"src={require('../components/images/' + {image})} alt="Card cap"/> */}
      <img className="card-img" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">Title: {title}</h5>
        <p className="card-text">Description: {description}</p>
        <div className="card-footer">
        <div className="d-flex justify-content-evenly">
        <a href={gitHub} className="btn btn-primary project-link">
          GitHub Repo
        </a>
        <a href={deployed} className="btn btn-primary project-link">
          Deployed Site
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
