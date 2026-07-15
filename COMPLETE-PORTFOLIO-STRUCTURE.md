<!-- COMPLETE REFERENCE: Amit's Full Portfolio Structure
This shows the complete HTML layout with all sections, styling, and structure.
Use this as a complete reference for your own portfolio!
-->

<!-- KEY SECTIONS STRUCTURE:
1. NAVBAR - Fixed navigation
2. HERO - Home/intro section
3. ABOUT - About section with stats
4. SKILLS - Skills categories
5. EXPERIENCE - Timeline of work experience
6. SERVICES - Services offered (6 cards)
7. APPS - Portfolio projects (6 apps)
8. EDUCATION - Education/certifications
9. ACHIEVEMENTS - Accomplishments
10. CONTACT - Contact form + info
11. FOOTER - Footer section
-->

<!-- ===== NAVBAR STRUCTURE ===== -->
<nav>
  <a href="#home" class="nav-logo">Your<span>Name</span></a>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<!-- ===== HERO SECTION ===== -->
<section id="home">
  <div class="hero-content">
    <p class="hero-greeting">Welcome to my portfolio</p>
    <h1 class="hero-name">Hi, I'm <span>Your Name</span></h1>
    <p class="hero-title">Lead <strong>Mobile & Full-Stack Engineer</strong></p>
    <p class="hero-desc">10+ years of experience building innovative mobile apps, backend systems, and leading high-performing teams. Specialized in iOS, React Native, .NET Core, and AI-powered solutions.</p>
    <div class="hero-btns">
      <a href="#contact" class="btn-primary">Get In Touch</a>
      <a href="#experience" class="btn-outline">View My Work</a>
    </div>
    <div class="social-links">
      <a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
  <div class="hero-image">
    <div class="hero-img-wrapper">
      <img src="photo.jpeg" alt="Profile Photo">
      <div class="hero-badge">Available For Work</div>
    </div>
  </div>
</section>

<!-- ===== ABOUT SECTION ===== -->
<section id="about">
  <div class="section-header">
    <div class="section-tag">About Me</div>
    <h2 class="section-title">Who Am I?</h2>
    <div class="section-line"></div>
  </div>
  <div class="about-grid">
    <div class="about-stats">
      <div class="stat-card">
        <div class="stat-number">10+</div>
        <p class="stat-label">Years Experience</p>
      </div>
      <div class="stat-card">
        <div class="stat-number">50+</div>
        <p class="stat-label">Projects Delivered</p>
      </div>
      <div class="stat-card">
        <div class="stat-number">6+</div>
        <p class="stat-label">Team Members Led</p>
      </div>
      <div class="stat-card">
        <div class="stat-number">10M+</div>
        <p class="stat-label">Users Impacted</p>
      </div>
    </div>
    <div class="about-text">
      <h3>Full-Stack & Mobile Expert</h3>
      <p>I'm a passionate engineer with a proven track record of building scalable solutions and leading high-performing teams. My expertise spans mobile development (iOS, React Native), backend systems (.NET Core, Node.js), and emerging technologies like AI and Machine Learning.</p>
      <p>I believe in writing clean, maintainable code and fostering collaborative team environments. When I'm not coding, I love mentoring junior developers and exploring new technologies.</p>
      <div class="about-chips">
        <span class="chip">Problem Solver</span>
        <span class="chip">Team Leader</span>
        <span class="chip">Innovator</span>
        <span class="chip">Tech Enthusiast</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== SKILLS SECTION ===== -->
<section id="skills">
  <div class="section-header">
    <div class="section-tag">Technical Expertise</div>
    <h2 class="section-title">My Skills</h2>
    <div class="section-line"></div>
  </div>
  <div class="skills-grid">
    <div class="skill-category">
      <div class="skill-cat-title"><i class="fas fa-mobile-alt"></i> Mobile Development</div>
      <div class="skill-tags">
        <span class="skill-tag primary">iOS</span>
        <span class="skill-tag primary">React Native</span>
        <span class="skill-tag">Swift</span>
        <span class="skill-tag">Kotlin</span>
        <span class="skill-tag">Flutter</span>
      </div>
    </div>
    <div class="skill-category">
      <div class="skill-cat-title"><i class="fas fa-server"></i> Backend Development</div>
      <div class="skill-tags">
        <span class="skill-tag primary">.NET Core</span>
        <span class="skill-tag primary">Node.js</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">MongoDB</span>
      </div>
    </div>
    <div class="skill-category">
      <div class="skill-cat-title"><i class="fas fa-brain"></i> AI & ML</div>
      <div class="skill-tags">
        <span class="skill-tag primary">LLM Integration</span>
        <span class="skill-tag primary">Voice AI</span>
        <span class="skill-tag">TensorFlow</span>
        <span class="skill-tag">ML Models</span>
      </div>
    </div>
    <div class="skill-category">
      <div class="skill-cat-title"><i class="fas fa-tools"></i> Tools & Platforms</div>
      <div class="skill-tags">
        <span class="skill-tag primary">AWS</span>
        <span class="skill-tag primary">Docker</span>
        <span class="skill-tag">Git</span>
        <span class="skill-tag">CI/CD</span>
        <span class="skill-tag">Kubernetes</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== EXPERIENCE SECTION (TIMELINE) ===== -->
<section id="experience">
  <div class="section-header">
    <div class="section-tag">Career Journey</div>
    <h2 class="section-title">Work Experience</h2>
    <div class="section-line"></div>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"><i class="fas fa-briefcase"></i></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-company">Tech Company Name</h3>
          <span class="timeline-period">2020 - Present</span>
        </div>
        <p class="timeline-role">Lead Mobile Engineer</p>
        <ul class="timeline-desc">
          <li>Led team of 6 engineers in building iOS and React Native apps</li>
          <li>Architected scalable mobile solutions serving 2M+ users</li>
          <li>Implemented AI-powered features improving user engagement by 40%</li>
          <li>Mentored junior developers and established coding best practices</li>
        </ul>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"><i class="fas fa-briefcase"></i></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-company">Previous Company</h3>
          <span class="timeline-period">2016 - 2020</span>
        </div>
        <p class="timeline-role">Senior Mobile Developer</p>
        <ul class="timeline-desc">
          <li>Developed and maintained 5+ production mobile applications</li>
          <li>Improved app performance by 35% through optimization</li>
          <li>Collaborated with backend team on API design and integration</li>
          <li>Achieved 4.8★ rating on app stores with 500K+ downloads</li>
        </ul>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"><i class="fas fa-briefcase"></i></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-company">Startup Company</h3>
          <span class="timeline-period">2013 - 2016</span>
        </div>
        <p class="timeline-role">Junior Mobile Developer</p>
        <ul class="timeline-desc">
          <li>Built first production iOS apps from scratch</li>
          <li>Implemented real-time features using WebSockets</li>
          <li>Contributed to company's tech stack decisions</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== SERVICES SECTION ===== -->
<section id="services">
  <div class="section-header">
    <div class="section-tag">What I Offer</div>
    <h2 class="section-title">Services</h2>
    <div class="section-line"></div>
  </div>
  <div class="services-grid">
    <div class="service-card">
      <div class="service-icon"><i class="fas fa-mobile-alt"></i></div>
      <h3>Mobile App Development</h3>
      <p>Expert iOS and React Native development. Building beautiful, intuitive mobile experiences with scalability.</p>
    </div>
    <div class="service-card">
      <div class="service-icon"><i class="fas fa-brain"></i></div>
      <h3>AI & Machine Learning</h3>
      <p>Implement cutting-edge AI solutions including voice AI, LLMs, and intelligent personalization engines.</p>
    </div>
    <div class="service-card">
      <div class="service-icon"><i class="fas fa-code"></i></div>
      <h3>Backend Development</h3>
      <p>Build robust APIs and backend systems using .NET Core, Node.js with modern architectures.</p>
    </div>
    <div class="service-card">
      <div class="service-icon"><i class="fas fa-paint-brush"></i></div>
      <h3>Architecture Design</h3>
      <p>Design scalable system architectures and create technical roadmaps for long-term growth.</p>
    </div>
    <div class="service-card">
      <div class="service-icon"><i class="fas fa-users"></i></div>
      <h3>Team Leadership</h3>
      <p>Lead engineering teams, mentor developers, and establish technical excellence across projects.</p>
    </div>
    <div class="service-card">
      <div class="service-icon"><i class="fas fa-lightbulb"></i></div>
      <h3>Consulting</h3>
      <p>Strategic consulting on technology choices, product architecture, and development strategies.</p>
    </div>
  </div>
</section>

<!-- ===== APPS/PORTFOLIO SECTION ===== -->
<section id="apps">
  <div class="section-header">
    <div class="section-tag">Portfolio</div>
    <h2 class="section-title">Apps I've Built</h2>
    <div class="section-line"></div>
  </div>
  <div class="apps-grid">
    <a href="#" class="app-card">
      <div class="app-icon"><i class="fas fa-shopping-bag"></i></div>
      <div class="app-content">
        <h3>E-Commerce Platform</h3>
        <p>High-performance shopping app with AI recommendations. 500K+ downloads, 4.8★ rating.</p>
        <div class="app-link"><i class="fas fa-arrow-right"></i> View Project</div>
      </div>
    </a>
    <a href="#" class="app-card">
      <div class="app-icon"><i class="fas fa-heartbeat"></i></div>
      <div class="app-content">
        <h3>Healthcare Solution</h3>
        <p>Healthcare app with voice AI for consultations. Real-time monitoring and analytics.</p>
        <div class="app-link"><i class="fas fa-arrow-right"></i> View Project</div>
      </div>
    </a>
    <a href="#" class="app-card">
      <div class="app-icon"><i class="fas fa-credit-card"></i></div>
      <div class="app-content">
        <h3>FinTech Platform</h3>
        <p>Secure financial transactions with real-time updates and multi-currency support.</p>
        <div class="app-link"><i class="fas fa-arrow-right"></i> View Project</div>
      </div>
    </a>
    <a href="#" class="app-card">
      <div class="app-icon"><i class="fas fa-music"></i></div>
      <div class="app-content">
        <h3>Music Streaming App</h3>
        <p>High-performance streaming platform with AI playlists. 1M+ active users.</p>
        <div class="app-link"><i class="fas fa-arrow-right"></i> View Project</div>
      </div>
    </a>
    <a href="#" class="app-card">
      <div class="app-icon"><i class="fas fa-car"></i></div>
      <div class="app-content">
        <h3>Ride Sharing App</h3>
        <p>Real-time location tracking, secure payments, instant notifications.</p>
        <div class="app-link"><i class="fas fa-arrow-right"></i> View Project</div>
      </div>
    </a>
    <a href="#" class="app-card">
      <div class="app-icon"><i class="fas fa-graduation-cap"></i></div>
      <div class="app-content">
        <h3>EdTech Platform</h3>
        <p>Interactive learning with progress tracking, personalized recommendations.</p>
        <div class="app-link"><i class="fas fa-arrow-right"></i> View Project</div>
      </div>
    </a>
  </div>
</section>

<!-- ===== EDUCATION SECTION ===== -->
<section id="education">
  <div class="section-header">
    <div class="section-tag">Learning Journey</div>
    <h2 class="section-title">Education</h2>
    <div class="section-line"></div>
  </div>
  <div class="edu-grid">
    <div class="edu-card">
      <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
      <div class="edu-info">
        <h3>B.Tech - Information Technology</h3>
        <p class="edu-college">Your University Name</p>
        <p class="edu-year">Graduated: 2013</p>
        <div class="edu-cgpa"><span class="cgpa-badge">7.5 CGPA</span></div>
      </div>
    </div>
    <div class="edu-card">
      <div class="edu-icon"><i class="fas fa-book"></i></div>
      <div class="edu-info">
        <h3>iOS Development Certification</h3>
        <p class="edu-college">Online Learning Platform</p>
        <p class="edu-year">Completed: 2014</p>
        <div class="edu-cgpa"><span class="cgpa-badge">Advanced</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== ACHIEVEMENTS SECTION ===== -->
<section id="achievements">
  <div class="section-header">
    <div class="section-tag">Accomplishments</div>
    <h2 class="section-title">Achievements</h2>
    <div class="section-line"></div>
  </div>
  <div class="achievements-grid">
    <div class="achievement-card">
      <div class="ach-icon"><i class="fas fa-award"></i></div>
      <div class="ach-content">
        <h4>Employee of the Year</h4>
        <p>Recognized for exceptional performance and leadership in 2022</p>
      </div>
    </div>
    <div class="achievement-card">
      <div class="ach-icon"><i class="fas fa-star"></i></div>
      <div class="ach-content">
        <h4>4.8★ App Store Rating</h4>
        <p>Maintained highest quality with 500K+ downloads</p>
      </div>
    </div>
    <div class="achievement-card">
      <div class="ach-icon"><i class="fas fa-users"></i></div>
      <div class="ach-content">
        <h4>Led 6+ Engineers</h4>
        <p>Built and mentored high-performing engineering team</p>
      </div>
    </div>
    <div class="achievement-card">
      <div class="ach-icon"><i class="fas fa-rocket"></i></div>
      <div class="ach-content">
        <h4>10M+ User Base</h4>
        <p>Deployed apps serving millions of users globally</p>
      </div>
    </div>
    <div class="achievement-card">
      <div class="ach-icon"><i class="fas fa-code"></i></div>
      <div class="ach-content">
        <h4>Open Source Contributor</h4>
        <p>Active contributor to popular mobile development projects</p>
      </div>
    </div>
    <div class="achievement-card">
      <div class="ach-icon"><i class="fas fa-lightbulb"></i></div>
      <div class="ach-content">
        <h4>Innovation Award</h4>
        <p>Pioneered AI-driven mobile solutions in healthcare</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== CONTACT SECTION ===== -->
<section id="contact">
  <div class="section-header">
    <div class="section-tag">Get In Touch</div>
    <h2 class="section-title">Contact Me</h2>
    <div class="section-line"></div>
  </div>
  <div class="contact-grid">
    <div class="contact-info">
      <h3>Let's work together</h3>
      <p>I'm always interested in hearing about new projects. Feel free to reach out!</p>
      <div class="contact-item">
        <div class="contact-item-icon"><i class="fas fa-envelope"></i></div>
        <div class="contact-item-text">
          <span>Email</span>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon"><i class="fas fa-phone"></i></div>
        <div class="contact-item-text">
          <span>Phone</span>
          <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon"><i class="fas fa-map-marker-alt"></i></div>
        <div class="contact-item-text">
          <span>Location</span>
          <span>Your City, Your Country</span>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" required>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="your@email.com" required>
        </div>
        <div class="form-group">
          <label>Subject</label>
          <input type="text" placeholder="Subject" required>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea placeholder="Your message..." rows="5" required></textarea>
        </div>
        <button type="submit" class="btn-primary">Send Message</button>
      </form>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="footer-content">
    <p>&copy; 2024 Your Name. All rights reserved.</p>
    <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Sitemap</a>
    </div>
  </div>
</footer>
