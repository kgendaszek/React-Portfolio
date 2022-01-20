import React from "react";
import Project from "../Project";

export default function Projects(props) {
  const allProjects = [
    {
      image: "./images/Final-product.jpeg",
      title: "HTML Refactoring",
      description: "This assignment was to refactor this page to HTML 5 semantics.",
      gitHub: "https://github.com/kgendaszek/Refactor-1",
      deployed: "https://kgendaszek.github.io/Refactor-1/",
    },
    {
      image: "./components/images/pwgen.png",
      title: "Password Generator",
      description: "This was my first project using JavaScript. As such, it proved an exciting challenge and a great learning experience.",
      gitHub: "https://github.com/kgendaszek/password-generator",
      deployed: "https://kgendaszek.github.io/password-generator/",
    },
    {
      image: "link goes here",
      title: "Test 2",
      description: "This is yet another test",
      gitHub: "https://github.com/kgendaszek/quiz",
      deployed: "https://kgendaszek.github.io/quiz/",
    },
    {
      image: "link goes here",
      title: "Test 2",
      description: "This is yet another test",
      gitHub: "https://github.com/kgendaszek/",
      deployed: "github.io/whatever",
    },
    {
      image: "link goes here",
      title: "Test 2",
      description: "This is yet another test",
      gitHub: "https://github.com/kgendaszek/",
      deployed: "github.io/whatever",
    },
    {
      image: "link goes here",
      title: "Test 2",
      description: "This is yet another test",
      gitHub: "https://github.com/kgendaszek/",
      deployed: "github.io/whatever",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {allProjects.map((app) => {
          return (
            <Project
              image={app.image}
              title={app.title}
              description={app.description}
              gitHub={app.gitHub}
              deployed={app.deployed}
            />
          );
        })}
      </div>
    </div>
  );
}
