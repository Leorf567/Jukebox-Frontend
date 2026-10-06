import React from 'react';
import { Header, Footer } from '../layout';
import './PublicLanding.scss';

const PublicLanding: React.FC = () => {
  return (
    <div className="landing-container">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="inner-container hero-container">
            <div className="hero-content">
              <h1>Welcome to <br /> the <span className="highlight">Jukebox</span> Project</h1>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <button className="get-started-btn">
                Get Started <span className="arrow-circle">→</span>
              </button>
            </div>
            {/* Wavy Graphic Placeholder */}
            <div className="hero-graphic"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="inner-container">
            <h2>Who Are We?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="inner-container">
            <h2>Notable Features</h2>
            <div className="features-grid">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="feature-card">
                  <div className="icon-placeholder"></div>
                  <h3>Topic Title</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href="#" className="inline-cta">Inline CTA →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repositories Section */}
        <section id="repos" className="repos-section">
          <div className="inner-container">
            <div className="repos-header">
              <h2>Repositories</h2>
              <button className="sign-up-btn">Sign Up</button>
            </div>
            
            <div className="repos-list">
              {/* Expanded Item */}
              <div className="repo-item expanded">
                <div className="repo-info-container">
                  <div className="repo-info">
                    <span className="number">01</span>
                    <div>
                      <h3>Some Title</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                  </div>
                  <div className="repo-image-placeholder"></div>
                </div>
                <button className="toggle-btn">—</button>
              </div>
              {/* Collapsed Items */}
              {['02 Another Title', '03 Example Title'].map((title) => (
                <div key={title} className="repo-item">
                  <div className="repo-info">
                    <span className="number">{title.split(' ')[0]}</span>
                    <h3>{title.substring(3)}</h3>
                  </div>
                  <button className="toggle-btn">+</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="inner-container">
            <h2>Ready to get coding?<br />Pick a repo and get Started!</h2>
            <button className="cta-primary-btn">CTA Primary</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PublicLanding;