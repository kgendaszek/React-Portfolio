// import { url } from "inspector";
import React from "react";
import Project from "../Project";
import refactor from "../../images/Final-product.jpeg"
import pwgen from "../../images/pwgen.png"
import coco from "../../images/coco-quiz-final.png"
import ogport from "../../images/portfolioss.png"
import barker from "../../images/bark.png"
import hypo from "../../images/hypo-login.png"




export default function Projects(props) {
  const allProjects = [
    {
      image: refactor,
      title: "HTML Refactoring",
      description: "This assignment was to refactor this page to HTML 5 semantics.",
      gitHub: "https://github.com/kgendaszek/Refactor-1",
      deployed: "https://kgendaszek.github.io/Refactor-1/",
    },
    {
      image: pwgen,
      title: "Password Generator",
      description: "This was my first project using JavaScript. As such, it proved an exciting challenge and a great learning experience.",
      gitHub: "https://github.com/kgendaszek/password-generator",
      deployed: "https://kgendaszek.github.io/password-generator/",
    },
    {
      image: coco,
      title: "Quiz made with JavaScript",
      description: "The code quiz was a challenge! It was made with JavaScript, and it was my first experience working with local storage.",
      gitHub: "https://github.com/kgendaszek/quiz",
      deployed: "https://kgendaszek.github.io/quiz/",
    },
    {
      image: ogport,
      title: "Original Portfolio",
      description: "This was my original portfolio made with just HTML and CSS. I've included it just to show how far I've come!",
      gitHub: "https://github.com/kgendaszek/Portfolio",
      deployed: "https://kgendaszek.github.io/Portfolio/",
    },
    {
      image: barker,
      title: "Barker",
      description: "Barker is an application I helped to create.It uses different API's to help the user decide what dog they should get & where the closest PetSmart is.",
      gitHub: "https://github.com/SteveKoutsodontis/Barker",
      deployed: "https://stevekoutsodontis.github.io/Barker/",
    },
    {
      image: hypo,
      title: "Hypochondriacs",
      description: "Hypochondriacs is an auction application that allows users to place bids on popular pandemic products. Each time someone clicks on the bid button it records the amount of bids.",
      gitHub: "https://github.com/negronmarc/Auction-for-Pandemic-Essentials",
      deployed: "https://auction-pandemic-essentials.herokuapp.com/",
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
