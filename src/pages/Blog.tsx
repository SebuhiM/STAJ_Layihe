import React, { useState, useEffect } from "react";
import "../css/blog.css";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  description: string;
  image: string;
}

const mockBlogs: BlogPost[] = [
  {
    id: 1,
    title: "iPhone 14 Pro: What's New?",
    date: "Jan 24, 2026",
    readTime: "4 min read",
    description: "A detailed review of the Dynamic Island feature, 48MP camera system, and the A16 Bionic chip.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "How to Extend Your Smartphone's Battery Life?",
    date: "Jan 20, 2026",
    readTime: "3 min read",
    description: "Simple yet effective battery management tips to increase the lifespan of your device.",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Best Flagship Smartphones of 2026",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    description: "A roundup of top market models, camera comparisons, and performance benchmarks.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60"
  }
];

const Blog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading-state">Loading... </div>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Blog</h1>
      <p className="blog-subtitle">Latest news and tips from the world of technology.</p>

      <div className="blog-grid">
        {mockBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            
            <div className="blog-content">
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>

              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-desc">{blog.description}</p>

              <button 
                onClick={() => alert(`Opening "${blog.title}"...`)}
                className="read-more-btn"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;