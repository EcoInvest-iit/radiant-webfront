
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span>Radiant</span>
        </div>
        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => setActiveLink('home')}
          >
            Home
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${activeLink === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveLink('profile')}
          >
            Profile
          </Link>
          <Link 
            to="/login" 
            className={`nav-link ${activeLink === 'login' ? 'active' : ''}`}
            onClick={() => setActiveLink('login')}
          >
            Login
          </Link>
          <Link 
            to="/signin" 
            className={`nav-link ${activeLink === 'signin' ? 'active' : ''}`}
            onClick={() => setActiveLink('signin')}
          >
            Sign In
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => setActiveLink('about')}
          >
            About Us
          </Link>
          <Link 
            to="/working" 
            className={`nav-link ${activeLink === 'working' ? 'active' : ''}`}
            onClick={() => setActiveLink('working')}
          >
            Working
          </Link>
        </nav>
      </header>
      
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Where design meets simplicity</h1>
            <p className="hero-subtitle">Discover the perfect balance of form and function</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <div className="image-placeholder"></div>
          </div>
        </section>
        
        <section className="features-section">
          <h2 className="section-title">Essential Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Intuitive Design</h3>
              <p>Clean interfaces that put user experience first</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Powerful Tools</h3>
              <p>Everything you need to create and customize</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Seamless Integration</h3>
              <p>Works perfectly with your existing workflow</p>
            </div>
          </div>
        </section>
      </main>
      
      <style jsx>{`
        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .home-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #333;
          position: relative;
          overflow-x: hidden;
        }
        
        /* Navigation Bar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          padding: 1rem 3rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: #555;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover, .nav-link.active {
          color: #000;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #000;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        
        /* Main Content */
        .main-content {
          padding-top: 5rem;
        }
        
        /* Hero Section */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 90vh;
          padding: 2rem 3rem;
          margin-top: 2rem;
        }
        
        .hero-content {
          flex: 1;
          max-width: 600px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        
        .cta-button {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-placeholder {
          width: 450px;
          height: 450px;
          background: linear-gradient(135deg, #f2f2f2 0%, #e6e6e6 100%);
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          transition: transform 0.5s ease;
        }
        
        .image-placeholder:hover {
          transform: translateY(-10px) rotate(2deg);
        }
        
        /* Features Section */
        .features-section {
          padding: 5rem 3rem;
          background-color: #f8f8f8;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 4rem;
          letter-spacing: -0.5px;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          background: #f2f2f2;
          border-radius: 15px;
          margin-bottom: 1.5rem;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }
        
        .feature-card p {
          color: #666;
          line-height: 1.6;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 3rem 2rem;
          }
          
          .hero-content {
            margin-bottom: 3rem;
            max-width: 100%;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .image-placeholder {
            width: 100%;
            max-width: 400px;
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 2rem;
          }
          
          .nav-links {
            gap: 1rem;
          }
          
          .hero-section {
            padding: 2rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .features-section {
            padding: 3rem 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .image-placeholder {
            height: 300px;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
