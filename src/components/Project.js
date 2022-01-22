import React from "react";

function Project({ image, title, description, gitHub, deployed }) {
  return (
    <div className="card col-md-4">
      <img className="card-img projectimg d-flex" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="card-footer">
        <div className="d-flex justify-content-evenly">
        <a href={gitHub} target="_blank" className="btn btn-primary project-link">
          GitHub Repo
        </a>
        <a href={deployed} target="_blank" className="btn btn-primary project-link">
          Deployed Site
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
