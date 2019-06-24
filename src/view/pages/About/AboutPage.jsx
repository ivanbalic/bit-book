import React from "react";

import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="pt-0">
      <div class="text-white header bg-image">
        <div class="container text-center">
          <h1>
            <img
              src="https://i.imgur.com/Xa93F4x.png"
              alt=""
              className="w-50"
            />
          </h1>
          <h1 class="lead">Meet amazing people.</h1>
        </div>
      </div>

      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2>About</h2>

              <p className="lead">BitBook is a Simple Social Media Network.</p>
              <p className="lead">Users can register/login.</p>
              <p className="lead">
                The central page is feed, which shows posts by all users. Posts
                can be filtered by type (text, image, video). Users are allowed
                to create, delete and make a comment on posts. There is search
                function which allows users to find a another user. Profile has
                edit function, users can upload image from their PC.
              </p>
              <p className="lead">
                User have possibility to refresh users by clicking refresh
                button in header. App also keeps track of the time when laste
                user refresh is done and displays that info in the footer, as
                well as gender statistics wichi are displayed under the search
                bar.
              </p>
              <p className="lead">
                Source code on{" "}
                <a href="https://github.com/ivanbalic/bit-book" target="blank">
                  <i className="fab fa-github" /> GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2>Showcasing</h2>
              <ul>
                <li>React.js</li>
                <li>RESTFul API</li>
                <li>Separation of concerns</li>
                <li>Passing data through multiple layers, both ways</li>
                <li>Stateful and Stateless components</li>
                <li>Authentication</li>
                <li>Validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2>Stack</h2>
              <ul>
                <li>Language: HTML5, CSS3, JS(ES6+)</li>
                <li>Library: React, Bootstrap</li>
                <li>Package Manager: Yarn</li>
                <li>Deployment: GitHub Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { AboutPage };
