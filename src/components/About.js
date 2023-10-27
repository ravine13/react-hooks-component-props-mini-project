import React from "react";

function About(props) {
  const { image, aboutText } = props;

  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{aboutText}</p>
      <p>{"About this blog"}</p>
    </aside>
  );
}

export default About;