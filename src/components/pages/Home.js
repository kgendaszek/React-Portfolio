import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Katherine Gendaszek</h1>
      <div className="row">
      <div className="card col d-flex home">
        <img
          className="card-img-body"
          src={require("../../../src/profile.jpeg")}
          alt="profile" />
          <div className="card-text about d-flex">
            Hi! My name is Katie and I am so glad you are here! I have been
            happily married since 2016, we've been together since 2007! We have
            a beautiful daughter, and 3 crazy pets! Two dogs, Loki and Luna, and
            one 3-legged cat, Bucky. When I'm not spending time with my family
            or learning how to code, I love to read. When I was in elementary
            school I used to get in trouble for reading during class! For the
            last 12 years I have worked in retail, more than half of that as
            management. So, while I have no previous job experience with Web
            Development, I bring many other skills to the table. Customer
            service, problem solving, time management,and adaptability, just to
            name a few! I can't wait to learn more, and grow in this field.
          </div>
          </div>
        </div>
      </div>
  );
}
