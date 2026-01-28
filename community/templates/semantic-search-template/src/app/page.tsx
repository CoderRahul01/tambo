"use client";

import { useTambo } from "@tambo-ai/react";
import { Sparkles } from "lucide-react";
import "../styles/page.css";

export default function SemanticSearchPage() {
  const { thread, sendThreadMessage, isIdle } = useTambo();
  const messages = thread?.messages || [];
  const isStreaming = !isIdle;

  const handleInitialSearch = (query: string) => {
    sendThreadMessage(query);
  };

  
  //Helper to extract text from message content which can be a string or array of parts.

  const getMessageText = (content: any): string => {
    if (typeof content === "string") return content;
    if (Array.isArray(content)) {
      return content
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("");
    }
    return "";
  };

  return (
    <main className="main-container">
      {/* Header */}
      <header className="page-header">
        <div className="badge">
          <Sparkles size={16} />
          <span>Powered by Tambo AI</span>
        </div>
        <h1 className="hero-title">
          Semantic Search <span className="title-accent">Redefined</span>
        </h1>
        <p className="hero-description">
          Experience natural language search that understands intent and renders
          interactive UI components on the fly.
        </p>
      </header>

      {/* Main Interaction Area */}
      <div className="interaction-area">
        {/* If no messages, show the initial state with examples */}
        {messages.length === 0 && (
          <div className="empty-state-container animate-slide-up">
            <div className="empty-state-card">
              <p className="empty-state-label">Try a semantic query</p>
              <div className="example-grid">
                {[
                  "Find the best Japanese restaurants in San Francisco",
                  "Show me the latest breakthroughs in fusion energy",
                  "Compare the top 3 electric SUVs by range and price",
                  "Help me plan a 3-day itinerary for Tokyo",
                ].map((example) => (
                  <button
                    key={example}
                    onClick={() => handleInitialSearch(example)}
                    className="example-button"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Generative UI Section */}
        <div className="chat-container">
          {messages.map((message, index) => (
            <div
              key={message.id || index}
              className={`message-wrapper ${message.role === "user" ? "user-message-wrapper" : "ai-message-wrapper"}`}
            >
              {message.role === "user" ? (
                <div className="user-bubble">
                  <p>{getMessageText(message.content)}</p>
                </div>
              ) : (
                <div className="ai-content-area">
                  {/* Result component will be rendered here by Tambo automatically */}
                  {message.renderedComponent ? (
                    <div className="result-item animate-fade-in">
                      {message.renderedComponent}
                    </div>
                  ) : (
                    <div className="ai-bubble">
                      <p className="ai-text">
                        {getMessageText(message.content)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {isStreaming && (
            <div className="streaming-indicator">
              <div className="dot-container">
                <div className="dot" />
                <div className="dot" style={{ animationDelay: "0.1s" }} />
                <div className="dot" style={{ animationDelay: "0.2s" }} />
              </div>
              <span>Interpreting query...</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <footer className="page-footer">
        <p>© 2026 Tambo Community. Built for the future of search.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Documentation
          </a>
          <a href="#" className="footer-link">
            GitHub
          </a>
          <a href="#" className="footer-link">
            Discord
          </a>
        </div>
      </footer>
    </main>
  );
}
