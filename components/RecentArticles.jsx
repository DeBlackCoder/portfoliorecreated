"use client";
import "./recentarticles.css";
import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import "./articlecard.css"; // <-- your CSS

const ArticleCard = ({ article, isWebArticle, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="article-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="article-card-image-container">
        <img
          src={article.image}
          alt={article.title}
          className="article-card-image"
        />
      </div>

      <div className="article-card-content">
        {isWebArticle && (
          <div className="article-card-platform-badge">
            <ExternalLink size={16} />
            <span>{article.platform}</span>
          </div>
        )}

        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-description">{article.description}</p>

        <div className="article-card-author-section">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="article-card-avatar"
          />

          <div className="article-card-author-info">
            <div className="article-card-author-name">
              {article.author.name}
            </div>
            <div className="article-card-meta">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {isWebArticle ? (
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card-read-more-btn"
          >
            Read More <ArrowRight size={16} />
          </a>
        ) : (
          <button
            onClick={() => onReadMore(article)}
            className="article-card-read-more-btn"
          >
            Read More <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

const RecentArticles = () => {
  const articles = [
    {
      id: "web-1",
      title: "Incremental Static Regeneration (ISR) in Web Development",
      description:
        "This approach was pioneered by frameworks like Next.js, and it represents a...",
      author: {
        name: "Hillary-Prosper Wahua",
        avatar: "/images/prosper.png",
      },
      date: "13 weeks ago",
      readTime: "5 min read",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*TwRh3QpgeKIqbOfw.png",
      externalUrl:
        "https://dev.to/hillaryprosper_wahua_604/incremental-static-regeneration-isr-in-web-development-23dd",
      platform: "Dev Community",
    },
    {
      id: "web-2",
      title: "Understanding the Basics of Web Development",
      description:
        "This guide will walk you through the fundamentals of web development, the different types of development, and the essential skills and tools you need to know..",
      author: {
        name: "Hillary-Prosper Wahua",
        avatar: "/images/prosper.png",
      },
      date: "7 weeks ago",
      readTime: "8 min read",
      image:
        "https://scandiweb.com/blog/wp-content/uploads/2024/02/blog-visuals-12.png",
      externalUrl:
        "https://dev.to/hillaryprosper_wahua_604/understanding-the-basics-of-web-development-48bf",
      platform: "Dev.to",
    },
    {
      id: "web-3",
      title: "Client-Side Rendering (CSR) in Web Development",
      description:
        "This approach gained massive traction with the rise of Single Page Applications (SPAs) and JavaScript frameworks such as React, Angular, Vue, and Svelte..",
      author: {
        name: "Hillary-Prosper Wahua",
        avatar: "/images/prosper.png",
      },
      date: "2 months ago",
      readTime: "8 min read",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*QIES7-WDF8KEFHEL.png",
      externalUrl:
        "https://dev.to/hillaryprosper_wahua_604/client-side-rendering-csr-in-web-development-3oa0",
      platform: "Dev.to",
    },
  ];

  return (
    <section className="recent-articles-section">
      <h2 className="recent-articles-title">Recent Articles</h2>

      <div className="recent-articles-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} isWebArticle={true} />
        ))}
      </div>

      <a href="/articles" className="recent-articles-view-all-button ">
        View All Articles
      </a>
    </section>
  );
};

export default RecentArticles;
