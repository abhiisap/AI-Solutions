import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "AI Development",
      description: "Build custom AI models to solve complex problems. We create AI-powered solutions tailored to your business needs.",
      icon: "🤖",
      link: "/ai-development"
    },
    {
      title: "Web Development",
      description: "Develop responsive and scalable web applications. From frontend to backend, we handle it all.",
      icon: "🌐",
      link: "/web-development"
    },
    {
      title: "Data Analytics",
      description: "Turn data into actionable insights with advanced analytics. Maximize the potential of your data.",
      icon: "📊",
      link: "/data-analytics"
    },
    {
      title: "Cloud Solutions",
      description: "Deploy and manage cloud infrastructure seamlessly. We help you migrate to the cloud with ease.",
      icon: "☁️",
      link: "/cloud-solutions"
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "AI-Solutions transformed our digital workflow! Highly recommended.",
      company: "TechCorp",
      icon: "🏢",
    },
    {
      name: "Jane Smith",
      feedback: "Their AI-powered tools made our prototyping process faster and cheaper.",
      company: "InnoTech",
      icon: "💼",
    },
  ];

  const showcaseItems = [
    {
      title: "AI-Powered Chatbot",
      description: "Enhanced customer support with real-time responses.",
      icon: "💬",
    },
    {
      title: "Prototyping Tool",
      description: "Rapid prototyping for faster innovation and testing.",
      icon: "🛠️",
    },
  ];

  const faqs = [
    {
      question: "What is AI Development?",
      answer: "AI Development involves building custom models and systems that simulate human intelligence to solve business problems. It can include tasks like data processing, natural language understanding, and decision making."
    },
    {
      question: "How does Cloud Solutions work?",
      answer: "Cloud solutions help businesses host and manage their data, applications, and infrastructure over the internet. It allows for scalability, cost efficiency, and better collaboration."
    },
  ];

  return (
    <div className="services-container">
      <header className="header">
        <h1>Our Services</h1>
        <p>Discover how we can help your business thrive with innovative solutions.</p>
      </header>

      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more-btn">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-icon">{testimonial.icon}</div>
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.name}, {testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase-section">
        <h2>Interactive Showcase</h2>
        <div className="showcase-grid">
          {showcaseItems.map((item, index) => (
            <div className="showcase-item" key={index}>
              <div className="showcase-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="expertise-section">
        <h2>Our Expertise</h2>
        <p>

Our Expertise Across Multiple Industries

Our team boasts extensive experience in a wide range of industries, including healthcare, finance, retail, and technology. With years of proven success, we have a deep understanding of each sector's unique challenges and requirements.

Healthcare: We have collaborated with healthcare providers and organizations to streamline operations, improve patient care, and enhance data security. Our solutions in telemedicine, electronic health records (EHR), and AI-powered diagnostic tools are designed to meet the stringent regulatory standards while delivering improved outcomes.

Finance: In the finance sector, we develop cutting-edge solutions that help institutions manage risk, comply with regulations, and provide a superior customer experience. From secure payment gateways to financial analytics and blockchain-based systems, our expertise enables businesses to drive efficiency and innovation.

Retail: We assist retail businesses in adapting to the evolving digital landscape by offering eCommerce platforms, customer experience enhancements, and data-driven marketing strategies. Our solutions help retailers stay competitive by optimizing their operations, improving inventory management, and providing personalized shopping experiences for customers.

We combine our deep technical knowledge with innovative strategies to solve complex problems, delivering high-performance solutions that empower businesses to thrive. Whether it's leveraging the latest advancements in artificial intelligence, cloud computing, or data analytics, our approach is always focused on maximizing value and driving sustainable growth for our clients.


</p>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your project and how we can help you achieve your goals.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>
    </div>
  );
};

export default Services;
