import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SinglePageWithAI.css";

const SinglePageWithAI = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [userQuery, setUserQuery] = useState("");
  const [assistantResponse, setAssistantResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [rating, setRating] = useState(0);
  const [submittedRating, setSubmittedRating] = useState(false);

  // Predefined responses for the assistant
  const responses = {
    hello: "Hi there! How can I assist you?",
    "how are you": "I'm just a bot, but I'm doing fine, thank you!",
    bye: "Goodbye! Have a great day!",
    service: "We offer virtual assistant services, event management, and customer support.",
    pricing: "Our pricing is based on the service package you choose. Contact our support for detailed pricing information.",
    "what is ai": "AI stands for Artificial Intelligence, a branch of computer science focused on building smart machines.",
    default: "I'm not sure how to respond to that. Can you ask something else?",
    "current time": `The current time is ${new Date().toLocaleTimeString()}`,
    "current day": `Today is ${new Date().toLocaleDateString("en-US", { weekday: 'long' })}`,
    eventcheck: "We have a few upcoming events! Please check our website for more details or contact our support team.",
    contactto: "You can contact us at support@aisolutions.com or call us at 123-456-7890.",
    homeinside: "Welcome to AI-Solutions. We offer virtual assistant services, event management, and customer support. How can we assist you today?",
  };

  // Predefined fun facts
  const funFacts = [
    "Did you know? Honey never spoils.",
    "The Eiffel Tower can be 15 cm taller during summer due to heat expansion.",
    "Bananas are berries, but strawberries aren’t.",
    "Octopuses have three hearts.",
    "Sharks existed before trees.",
  ];

  // Function to return a greeting based on time of day
  const getTimeOfDayGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Good morning!";
    } else if (hours < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  };

  // Function to handle rating selection
  const handleRating = (star) => {
    if (!submittedRating) {
      setRating(star);
    }
  };

  // Function to submit the rating
  const submitRating = () => {
    if (rating > 0) {
      setSubmittedRating(true);
    }
  };

  // Handle user input for the virtual assistant
  const handleQueryChange = (e) => {
    setUserQuery(e.target.value);
  };

  // Enhanced logic for handling queries and page redirection
  const handleQuerySubmit = async () => {
    if (userQuery.trim()) {
      setLoading(true);
      setTimeout(() => {
        const queryLowerCase = userQuery.toLowerCase();
        let response;

        // Check if the user query matches any specific predefined responses
        if (queryLowerCase.includes("fun fact")) {
          response = funFacts[Math.floor(Math.random() * funFacts.length)];
        } else if (responses[queryLowerCase]) {
          response = responses[queryLowerCase];

          // Handle navigation for specific queries
          if (queryLowerCase === "services") {
            navigate("/services");
          } else if (queryLowerCase === "home") {
            navigate("/");
          } else if (queryLowerCase === "contact") {
            navigate("/contact");
          } else if (queryLowerCase === "events") {
            navigate("/events");
          }
        } else {
          response = responses.default;
        }

        // Update the assistant's response and history
        const timestamp = new Date().toLocaleTimeString();
        setAssistantResponse(response);
        setHistory([...history, { query: userQuery, response, timestamp }]);
        setLoading(false);
        setUserQuery(""); // Clear input field
      }, 1000); // Simulate delay
    } else {
      setAssistantResponse("Please enter a query.");
    }
  };

  // Display a list of previous queries and responses
  const renderHistory = () => {
    return history.map((entry, index) => (
      <div key={index} className="history-item">
        <p><strong>Query:</strong> {entry.query}</p>
        <p><strong>Response:</strong> {entry.response}</p>
        <p><small><em>Time: {entry.timestamp}</em></small></p>
      </div>
    ));
  };

  return (
    <div className="single-page-container">
      <header className="header">
        <h1>Welcome to AI-Solutions</h1>
        <p>Explore our services and get assistance from our AI-powered assistant!</p>
      </header>

      {/* AI Virtual Assistant Section */}
      <section className="ai-assistant-section">
        <h2>AI Virtual Assistant</h2>
        <div className="chat-container">
          <div className="chat-box">
            <div className="chat-response">
              {loading ? (
                <p><strong>Assistant:</strong> Thinking...</p>
              ) : (
                <p><strong>Assistant:</strong> {assistantResponse || `${getTimeOfDayGreeting()} How can I help you today?`}</p>
              )}
            </div>
            <input
              type="text"
              value={userQuery}
              onChange={handleQueryChange}
              placeholder="Ask me anything..."
              className="query-input"
            />
            <button onClick={handleQuerySubmit} className="submit-query-btn" disabled={loading}>
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="rating-section">
        <h3>Rate Your Experience</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "filled" : ""} ${submittedRating ? "disabled" : ""}`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        {!submittedRating ? (
          <button onClick={submitRating} className="submit-rating-btn" disabled={rating === 0}>
            Submit Rating
          </button>
        ) : (
          <p>Thank you for your feedback!</p>
        )}
      </section>

      {/* Query History Section */}
      <section className="query-history-section">
        <h3>Previous Queries</h3>
        {renderHistory()}
      </section>
    </div>
  );
};

export default SinglePageWithAI;
