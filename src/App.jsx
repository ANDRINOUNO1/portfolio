import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} aria-label="Go to Home section">Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} aria-label="Go to About section">About</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} aria-label="Go to Projects section">Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} aria-label="Go to Contact section">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <h2>Hello, I'm <span>Andrew</span></h2>
        <p>An aspiring web developer</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a 4th-year IT student who loves creating modern websites with smooth and friendly UI/UX.
          I enjoy exploring free APIs, learning backend stuff, and trying out new technologies.
          I’m always excited to grow, take on challenges, and turn ideas into real projects.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Online Hotel Booking System</h3>
            <p className="description">A website for booking hotels online. It allows users to search for hotels, view available rooms, and book a room.</p>
            <p className="features">Features: Room booking and an Admin dashboard, etc.</p>
            <p className="tech">Technologies used: HTML, CSS, JavaScript, Angular, Node.js, Express, MySQL, and a little bit of Tailwind CSS.</p>
          </div>
          <div className="project-card">
            <h3>Online Dormitory Management System</h3>
            <p className="description">A website for managing dormitories. It allows users to search for dormitories, view available rooms, and book a room.</p>
            <p className="features">Features: Room booking, and Admin dashboard, tenant dashboard, accounting dashboard, and superadmin dashboard, etc.</p>
            <p className="tech">Technologies used: HTML, CSS, JavaScript, React, Node.js, Express, MySQL, and a little bit of Tailwind CSS.</p>
          </div>
          <div className="project-card">
            <h3>Arduino Projects</h3>
            <p className="description">Mainly use Arduino Uno and ESP32 to build projects like temperature and humidity sensors, water level sensors, and more.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email me at: <a href="mailto:mataandrewczar@gmail.com" aria-label="Send email to Andrew">mataandrewczar@gmail.com</a></p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Andrew Mata — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;