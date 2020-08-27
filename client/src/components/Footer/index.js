import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
      <div className="container text-center">


        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | Stephen Mayfield
          </p>
        </div>
        <a href="https://www.linkedin.com/in/stephen-mayfield-a50258b7/" alt="Stephen Mayfield's LinkedIn Profile" target="__blank"><i className="px-2 fab fa-linkedin fa-lg"></i></a>
        <a href="https://github.com/stmayfield" alt="Stephen Mayfield's GitHub Page" target="__blank"><i class="px-2 fab fa-github-square fa-lg"></i></a>
        <a href="mailto:code@stephenmayfield.com" alt="Stephen Mayfield's Portfolio Email Address"><i class="px-2 fab fas fa-envelope fa-lg"></i></a>

      </div>
    </footer>

  );
}

export default Footer;
