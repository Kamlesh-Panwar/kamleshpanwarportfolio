import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? "blog-container" : "blog-light blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <div className="blog-scroll-area">
            {blog.description && Array.isArray(blog.description) ? (
              <ul className={isDark ? "small-dark small" : "small"}>
                {blog.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{blog.description}</p>
            )}
          </div>
           <p className={isDark ? "small-dark small" : "small"}>
              {blog.role}
            </p>
           <p className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.date}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
