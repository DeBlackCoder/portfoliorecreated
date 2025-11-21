'use client';
import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import "./articlecard.css";
import "./articlefullview.css";
import "./articlepage.css";


// Article Data Component
const ArticleData = {
  webArticles: [
    {
      id: 'web-1',
      title: 'Incremental Static Regeneration (ISR) in Web Development',
      description: 'This approach was pioneered by frameworks like Next.js, and it represents a middle ground between Static Site Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR). .',
      author: {
        name: 'Hillary-Prosper Wahua',
        avatar: '/images/prosper.png'
      },
      date: '13 weeks ago',
      readTime: '5 min read',
      image: 'https://miro.medium.com/v2/resize:fit:1400/0*TwRh3QpgeKIqbOfw.png',
      externalUrl: 'https://dev.to/hillaryprosper_wahua_604/incremental-static-regeneration-isr-in-web-development-23dd',
      platform: 'Dev Community'
    },
    {
      id: 'web-2',
      title: 'Understanding the Basics of Web Development',
      description: 'This guide will walk you through the fundamentals of web development, the different types of development, and the essential skills and tools you need to know..',
      author: {
        name: 'Hillary-Prosper Wahua',
        avatar: '/images/prosper.png'
      },
      date: '7 weeks ago',
      readTime: '8 min read',
      image: 'https://scandiweb.com/blog/wp-content/uploads/2024/02/blog-visuals-12.png',
      externalUrl: 'https://dev.to/hillaryprosper_wahua_604/understanding-the-basics-of-web-development-48bf',
      platform: 'Dev.to'
    },

     {
      id: 'web-3',
      title: 'Client-Side Rendering (CSR) in Web Development',
      description: 'This approach gained massive traction with the rise of Single Page Applications (SPAs) and JavaScript frameworks such as React, Angular, Vue, and Svelte..',
      author: {
        name: 'Hillary-Prosper Wahua',
        avatar: '/images/prosper.png'
      },
      date: '2 months ago',
      readTime: '8 min read',
      image: 'https://miro.medium.com/v2/resize:fit:1400/0*QIES7-WDF8KEFHEL.png',
      externalUrl: 'https://dev.to/hillaryprosper_wahua_604/client-side-rendering-csr-in-web-development-3oa0',
      platform: 'Dev.to'
    }


  ],
  
  onsiteArticles: [
    {
      id: 'onsite-1',
      title: 'Progressive Hydration and Islands Architecture in Web Development',
      description: 'To address these issues, modern frameworks have introduced Progressive Hydration and the Islands Architecture..',
      author: {
        name: 'Hillary-Prosper Wahua',
        avatar: '/images/prosper.png'
      },
      date: '2weeks ago',
      readTime: '4 min read',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqtYQVnDnekjWBQgn-YQauBMloOHSq2xWpg&s',
      content: {
        sections: [
          {
            type: 'text',
            heading:'Progressive Hydration and Islands Architecture in Web Development',
            text: 'Progressive Hydration is a technique where only the necessary parts of a web page are hydrated (made interactive) as they come into view or as needed, rather than hydrating the entire page at once. This approach reduces the initial load time and improves performance, especially for pages with a lot of static content. Islands Architecture takes this concept further by breaking down a web page into smaller, self-contained "islands" of interactivity. Each island can be independently hydrated and updated, allowing for more efficient resource usage and better user experiences. '
          },
          {
            type: 'text',
            heading: 'Understanding Hydration',
            text: ' Hydration is the process of converting a server-rendered static HTML page into a fully interactive web application on the client side. When a page is server-rendered, it is sent to the browser as static HTML, which is great for performance and SEO. However, to make the page interactive (e.g., handling user inputs, dynamic content updates), JavaScript needs to "hydrate" the static HTML by attaching event listeners and initializing components. Traditional hydration involves loading and executing all the JavaScript for the entire page, which can lead to performance bottlenecks, especially on resource-constrained devices, based on user interactions and viewport visibility.'
          },
          {
            type: 'text',
            heading: 'The Problem with Full Hydration',
            text: 'When a large page with many interactive components is hydrated all at once, performance suffers. The browser is forced to process a heavy JavaScript bundle, increasing loading time and slowing down the "time to interactive." This can be particularly noticeable on mobile devices or slower connections. Users may experience delays before they can interact with the page, leading to frustration and higher bounce rates. In essence, full hydration can lead to unnecessary work — activating scripts for sections that users may never even scroll to. This inefficiency is what Progressive Hydration and Islands Architecture are designed to solve.'
          },
          {
            type: 'text',
            heading: 'Progressive Hydration Explained',
            text: 'Progressive Hydration takes a smarter approach. Instead of hydrating the entire page at once, it hydrates parts of the page gradually. The process starts with critical components, such as navigation menus or hero banners, and defers less important areas — like testimonials or footers — until later. This technique allows users to start interacting with key parts of a site almost immediately while the rest quietly activates in the background. The result is a faster, smoother experience, especially on pages with lots of dynamic content. By prioritizing what matters most to the user, Progressive Hydration ensures that websites feel responsive even before all scripts have finished loading. Consequently, it reduces the initial load time and improves overall performance, particularly for pages with a lot of static content.'
          },
          {
            type: 'text',
            heading: 'What Is Islands Architecture?',
            text: 'Islands Architecture takes the concept even further by focusing on structure rather than timing. Instead of treating an entire webpage as one big application, the page is divided into smaller, isolated "islands" of interactivity surrounded by static, fast-loading HTML. Each island functions independently. For instance, a product carousel, a search bar, and a newsletter form might all exist as separate islands. Only those specific parts need JavaScript, and only when they become visible or are interacted with. This means the browser handles far less code at once, drastically improving performance. It also allows developers to mix different frameworks or tools within a single site, making the architecture both flexible and efficient.'
          },


          {
            type: 'text',
            heading: 'Benefits of Progressive Hydration and Islands Architecture',
            text: 'Both Progressive Hydration and Islands Architecture offer significant benefits for web development. They lead to faster load times, improved performance, and a better user experience. By reducing the amount of JavaScript that needs to be processed upfront, these techniques help lower the time to interactive, making websites feel snappier and more responsive. Additionally, they can improve SEO by ensuring that critical content is available quickly for search engine crawlers. From a development perspective, Islands Architecture allows for greater modularity and flexibility, enabling teams to work on different parts of a site independently. This can lead to faster development cycles and easier maintenance over time. '
          },

          {
            type: 'text',
            heading: 'Conclusion',
            text: 'Progressive Hydration and Islands Architecture represent significant advancements in web development techniques. By focusing on performance and user experience, these approaches address the challenges posed by traditional hydration methods. As web applications continue to grow in complexity, adopting these strategies will be crucial for delivering fast, efficient, and engaging digital experiences. They not only enhance the performance of web applications but also provide developers with the tools to create more modular and maintainable codebases. As the web continues to evolve, embracing these techniques will be essential for building the next generation of high-performance websites and applications.Progressive Hydration and Islands Architecture are reshaping the way developers think about web performance. Rather than loading everything at once, they allow pages to come alive piece by piece, intelligently and efficiently.Together, these methods represent the next generation of frontend optimization — where speed, scalability, and interactivity coexist in harmony. As web frameworks continue to evolve, understanding and applying these principles will be essential for building the fast, modern web experiences users now expect. Ultimately, they empower developers to create websites that are not only visually stunning but also performant and user-friendly.'
          }
        ]
      }
    },
    {
      id: 'onsite-2',
      title: ' JSX Design Patterns',
      description: 'Design patterns are reusable solutions to common design problems. In CSS, design patterns help create consistent, maintainable, and scalable stylesheets. This article explores essential CSS design patterns that every web developer should know. alternatively, these patterns can significantly enhance the efficiency and effectiveness of your CSS codebase.',
      author: {
        name: 'Hillary-Prosper Wahua',
        avatar: '/images/prosper.png'
      },
      date: '1 months ago',
      readTime: '7 min read',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuvletrcaCDLExZv8MU5FnIL4lgGxyYZBMA&s',
      content: {
        sections: [
          {
            type: 'text',
            heading: 'Understanding Design Patterns',
            text: 'Design patterns are reusable solutions to common design problems. They represent best practices refined over time by countless designers and have proven effective across different contexts. Understanding these patterns helps designers create more intuitive and user-friendly experiences.'
          },
          {
            type: 'code',
            heading: 'Navigation Pattern Example',
            language: 'javascript',
            code: `// Hamburger Menu Pattern
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="mobile-nav">
      <button onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="menu-items">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
};`,
            explanation: 'This code demonstrates a simple hamburger menu pattern using React hooks. The menu toggles visibility when clicked, providing clean mobile navigation.'
          },
          {
            type: 'text',
            heading: 'Navigation Patterns',
            text: 'Navigation patterns are fundamental to user experience. The hamburger menu provides clean mobile navigation. Breadcrumbs help users understand their location within a site hierarchy. Tab bars enable quick switching between main sections. Each pattern serves specific use cases and user needs.'
          },
          {
            type: 'code',
            heading: 'Form Validation Pattern',
            language: 'javascript',
            code: `// Inline Validation Pattern
const FormInput = ({ name, validate }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    const validationError = validate(newValue);
    setError(validationError);
  };
  
  return (
    <div className="form-field">
      <input 
        value={value} 
        onChange={handleChange}
        className={error ? 'error' : ''}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};`,
            explanation: 'Inline validation provides immediate feedback to users as they type, reducing form submission errors.'
          },
          {
            type: 'text',
            heading: 'Form Patterns',
            text: 'Effective form design follows established patterns that reduce user friction. Inline validation provides immediate feedback. Progressive disclosure breaks complex forms into manageable steps. Smart defaults speed up completion. These patterns make data entry less painful and more successful.'
          },
          {
            type: 'text',
            heading: 'Content Patterns',
            text: 'Content patterns help organize and present information effectively. Card layouts group related information into scannable units. Infinite scroll works well for social feeds. Pagination suits e-commerce catalogs. The right pattern depends on content type and user goals.'
          },
          {
            type: 'text',
            heading: 'Interactive Patterns',
            text: 'Interactive patterns guide user actions and provide feedback. Loading states manage expectations during wait times. Empty states guide users when no content exists. Success confirmations reassure users their actions completed. These patterns create confidence and reduce uncertainty in digital interactions.'
          }
        ]
      }
    }
  ]
};

// Article Card Component
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
            <div className="article-card-author-name">{article.author.name}</div>
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

// Full Article View Component
const ArticleFullView = ({ article, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="article-fullview-overlay">
      <div className="article-fullview-container">
        <button 
          onClick={onClose}
          className="article-fullview-back-btn"
        >
          <ArrowLeft size={20} />
          Back to Articles
        </button>

        <article>
          <h1 className="article-fullview-title">{article.title}</h1>
          
          <div className="article-fullview-author-section">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="article-fullview-avatar"
            />
            <div className="article-fullview-author-info">
              <div className="article-fullview-author-name">{article.author.name}</div>
              <div className="article-fullview-meta">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <img 
            src={article.image} 
            alt={article.title}
            className="article-fullview-image"
          />

          {article.content.sections.map((section, index) => (
            <div key={index} className="article-fullview-section">
              <h2 className="article-fullview-section-heading">{section.heading}</h2>
              
              {section.type === 'text' ? (
                <p className="article-fullview-section-text">{section.text}</p>
              ) : section.type === 'code' ? (
                <>
                  <div className="article-fullview-code-block">
                    <div className="article-fullview-code-header">
                      <span className="article-fullview-language-tag">{section.language}</span>
                      <button 
                        onClick={() => copyCode(section.code, index)}
                        className={`article-fullview-copy-btn ${copiedIndex === index ? 'copied' : ''}`}
                      >
                        {copiedIndex === index ? 'Copied!' : 'Copy Code'}
                      </button>
                    </div>
                    <pre className="article-fullview-code">{section.code}</pre>
                  </div>
                  {section.explanation && (
                    <p className="article-fullview-code-explanation">{section.explanation}</p>
                  )}
                </>
              ) : null}
            </div>
          ))}

          <div className="article-fullview-footer">
            <button 
              onClick={onClose}
              className="article-fullview-back-btn"
            >
              <ArrowLeft size={20} />
              Back to Articles
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

// Main Articles Page Component
const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="articles-page">
      {!selectedArticle ? (
        <div className="articles-page-container">
          <div className="articles-page-section">
            <h2 className="articles-page-section-title">Web Articles</h2>
            <div className="articles-page-grid">
              {ArticleData.webArticles.map(article => (
                <ArticleCard 
                  key={article.id}
                  article={article}
                  isWebArticle={true}
                />
              ))}
            </div>
          </div>

          <div className="articles-page-section">
            <h2 className="articles-page-section-title">On-Site Articles</h2>
            <div className="articles-page-grid">
              {ArticleData.onsiteArticles.map(article => (
                <ArticleCard 
                  key={article.id}
                  article={article}
                  isWebArticle={false}
                  onReadMore={setSelectedArticle}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ArticleFullView 
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};

export default ArticlesPage;