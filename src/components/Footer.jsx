import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ email: '', message: '' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Media', href: '#media' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Component1.png', href: '#' },
    { name: 'Instagram', icon: 'Vector (2).png', href: '#' },
    { name: 'Email', icon: 'l1.png', href: 'mailto:connect@drvinmenon.com' },
    { name: 'YouTube', icon: 'Vector1.png', href: '#' }
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Left Section - About & Contact Form */}
          <div className="footer-left">
            <div className="footer-info">
              <h3 className="footer-name">Dr. Vin Menon</h3>
              <p className="footer-description">
                Global entrepreneur and thought leader in regenerative technology, 
                sustainable finance, and nature-based innovation.
              </p>
              <p className="footer-email">
                Email: connect@drvinmenon.com
              </p>
              
              {/* Social Media Icons */}
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="social-icon"
                    aria-label={social.name}
                  >
                    <img src={social.icon} alt={social.name} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h4 className="form-title">GET IN TOUCH WITH US</h4>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email:--"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message:--"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="form-textarea"
                  />
                </div>
                
                <button type="submit" className="form-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          
          {/* Right Section - Quick Links */}
          <div className="footer-right">
            <div className="quick-links">
              <h4 className="links-title">Quick Links</h4>
              <nav className="links-nav">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Dr. Vin Menon. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
