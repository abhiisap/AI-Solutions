import React, { useState, useEffect } from "react";
import { FaBuilding, FaSmile, FaIndustry } from "react-icons/fa"; // Importing icons
import "./Home.css";

const Home = () => {
  const [timeGreeting, setTimeGreeting] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setTimeGreeting("Good Morning");
    else if (hour < 18) setTimeGreeting("Good Afternoon");
    else setTimeGreeting("Good Evening");
  }, []);

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleNameSubmit = () => {
    if (userInput) {
      setUserName(userInput);
      setUserInput(""); // Clear input field
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div className="greeting-container">
          <h1>
            {timeGreeting}, {userName || "Welcome to AI-Solutions"}
          </h1>
          <p>Innovating the future of digital employee experience.</p>
        </div>
        <div className="hero-animation"></div>
      </header>

      {!userName && (
        <div style={styles.userInput}>
          <p>What’s your name?</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={userInput}
            onChange={handleInputChange}
            style={styles.input}
          />
          <button onClick={handleNameSubmit} style={styles.button}>
            Submit
          </button>
        </div>
      )}

      <section style={styles.section}>
        <h2>Why Choose AI-Solutions?</h2>
        <p>
          AI-Solutions provides cutting-edge tools to enhance the digital
          employee experience. Our solutions are designed to automate processes,
          streamline workflows, and improve employee engagement. From predictive
          maintenance to AI-powered assistance, we deliver results that keep your
          business ahead of the curve. Our tools leverage the latest advancements
          in artificial intelligence, enabling businesses to optimize operations,
          reduce costs, and increase efficiency. We help you unlock the full
          potential of AI, driving innovation, and ensuring your workforce thrives
          in a digital-first world. Whether it's intelligent automation,
          data-driven decision-making, or personalized employee support, we empower
          your organization to stay competitive in an ever-evolving market.
        </p>
      </section>

      <section style={styles.featureSection}>
        <h2>What We Offer</h2>
        <div style={styles.features}>
          <div style={styles.featureCard} className="feature-card">
            <img
              src="/images/virtual-assistant.avif"
              alt="Virtual Assistant"
              style={styles.featureImage}
            />
            <h3>AI-Powered Virtual Assistant</h3>
            <p>
              Our assistant provides real-time responses to inquiries, enhancing
              productivity and streamlining workflows.
            </p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <img
              src="/images/protoype-solution.jpg"
              alt="Prototyping Solutions"
              style={styles.featureImage}
            />
            <h3>Affordable Prototyping Solutions</h3>
            <p>
              Leverage AI to create rapid prototypes that save costs and
              accelerate innovation for your projects.
            </p>
          </div>
          <div style={styles.featureCard} className="feature-card">
            <img
              src="/images/employee.webp"
              alt="Employee Experience"
              style={styles.featureImage}
            />
            <h3>Enhanced Employee Experience</h3>
            <p>
              Empower your workforce with AI-driven tools to address issues
              proactively, ensuring optimal productivity.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <h2>Our Impact</h2>
        <div style={styles.stats}>
          <div style={styles.statCard}>
            <FaBuilding style={styles.statIcon} /> {/* Company Icon */}
            <h3>1,000+</h3>
            <p>Companies served</p>
          </div>
          <div style={styles.statCard}>
            <FaSmile style={styles.statIcon} /> {/* Satisfaction Icon */}
            <h3>95%</h3>
            <p>Client Satisfaction Rate</p>
          </div>
          <div style={styles.statCard}>
            <FaIndustry style={styles.statIcon} /> {/* Industry Icon */}
            <h3>50+</h3>
            <p>Industries transformed</p>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
  <h2>Ready to Get Started?</h2>
  <p style={{ color: "white" }}>
    Contact us today and see how AI-Solutions can revolutionize your digital workforce.
  </p>
  <button style={styles.ctaButton}>Contact Us</button>
</section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#d4e4f3", // Slightly darker blue for background
  },
  header: {
    backgroundColor: "#d3d3d3",
    color: "white",
    padding: "50px 20px",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
  },
  greetingContainer: {
    zIndex: 2,
  },
  heroAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('https://via.placeholder.com/1500x500') no-repeat center center",
    backgroundSize: "cover",
    animation: "move 15s linear infinite",
  },
  userInput: {
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#004f72", // Darker blue for button
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  section: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
  },
  featureSection: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#b8daf2", // Lighter blue for feature section
    borderRadius: "10px",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  featureCard: {
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    textAlign: "left",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  featureImage: {
    width: "250px",
    height: "250px",
    objectFit: "contain",
    marginBottom: "15px",
  },
  statsSection: {
    marginTop: "40px",
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
  },
  statCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
  },
  statIcon: {
    fontSize: "50px",  // Size of the icon
    color: "#005f8b",  // Icon color
    marginBottom: "10px", // Space between icon and text
  },
  ctaSection: {
    marginTop: "40px",
    padding: "30px",
    backgroundColor: "#005f8b",
    color: "white",
    borderRadius: "10px",
  },
  ctaButton: {
    padding: "10px 20px",
    backgroundColor: "#ff5722",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};



export default Home;
