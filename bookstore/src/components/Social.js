import React from "react";

function Social() {
  return (
    <div>
      
      <section id="lab_social_icon_footer">
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="text-center center-block">
            <a href="https://avivcohenp.netlify.com/" target="_blank">
              <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
            </a>
            <a href="https://avivcohenp.netlify.com/" target="_blank">
              <i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
            </a>
            <a href="https://avivcohenp.netlify.com/" target="_blank">
              <i
                id="social-ig"
                className="fa fa-instagram fa-3x social"
              ></i>
            </a>
          </div>
          <h6 className="underIcon">we are social</h6>
        </div>
      </section>
    </div>
  );
}

export default Social;
