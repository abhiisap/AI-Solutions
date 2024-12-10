import React from "react";
import "./Events.css";

const Events = () => {
  const articles = [
    {
      title: "AI in Modern Businesses",
      summary: "Explore how AI is revolutionizing industries worldwide and improving efficiency.",
      link: "#",
      image: "/images/ai-business.jpg", // Real image from public/images
    },
    {
      title: "The Future of Web Development",
      summary: "A look into the latest trends in web development, including AI-powered tools and frameworks.",
      link: "#",
      image: "/images/web-development.webp", // Real image from public/images
    },
    {
      title: "Data Analytics in Action",
      summary: "How data analytics is helping businesses make better decisions and predict trends.",
      link: "#",
      image: "/images/data-analytics.avif", // Real image from public/images
    },
  ];

  const events = [
    {
      title: "AI Expo 2024",
      date: "March 15, 2024",
      location: "New York, USA",
      description: "An international event showcasing the latest in AI technology.",
      image: "/images/ai-expo.webp", // Real image from public/images
    },
    {
      title: "Tech Innovations Summit",
      date: "June 10, 2024",
      location: "San Francisco, USA",
      description: "A summit focusing on new technological innovations and digital transformation.",
      image: "/images/tech-summit.webp", // Real image from public/images
    },
    {
      title: "Web Development Conference",
      date: "July 5, 2024",
      location: "London, UK",
      description: "A conference bringing together the brightest minds in web development.",
      image: "/images/web-conf.jpg", // Real image from public/images
    },
  ];

  const galleryImages = [
    "/images/gallery1.jpg", // Real image from public/images
    "/images/gallery2.jpg", // Real image from public/images
    "/images/gallery3.jpg", // Real image from public/images
  ];

  return (
    <div className="single-page-container">
      <header className="header">
        <h1>Welcome to Our Showcase</h1>
        <p>Explore our articles, gallery, and upcoming events!</p>
      </header>

      {/* Articles Section */}
      <section className="articles-section">
        <h2>Latest Articles</h2>
        <div className="articles-list">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img src={article.image} alt={article.title} className="article-image" />
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <a href={article.link} className="read-more-link">Read more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Event Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt={`Event ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p className="event-date">{event.date} | {event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
