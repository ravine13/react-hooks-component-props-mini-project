import React from "react";
import blogData from "../data/blog";
import Header  from "./Header";
import About  from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const blogName = blogData.name
  const aboutText = blogData.about
  const logoImage = blogData.image
  const article = blogData.posts
  return (
    <div className="App">
    <Header name={blogName.name} />
    <About image={logoImage} aboutText={aboutText} />
    <ArticleList posts={article} />
    </div>
  );
}

export default App;

