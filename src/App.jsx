
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
  RefreshCw,
  FileText,
  ShoppingBag,
  NotebookPen,
  ListTodo,
  Sparkles,
  Copy,
  ExternalLink,
  UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import useTypingEffect from "./useTypingEffect";
import "./App.css";

const jobTitles = [
  "React.js Developer",
  "Frontend Developer",
  "Web Developer",
  "Creative Problem Solver",
  "Ui / Ux Designer"
];

const skills = [
  { name: "React.js", category: "Frontend", icon: "⚛️" },
  { name: "JavaScript", category: "Frontend", icon: "🟨" },
  { name: "HTML5", category: "Frontend", icon: "🌐" },
  { name: "CSS3", category: "Frontend", icon: "🎨" },
  { name: "Bootstrap", category: "Frontend", icon: "🅱️" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Express.js", category: "Backend", icon: "🚀" },
  { name: "Python", category: "Backend", icon: "🐍" },
  { name: "Django", category: "Backend", icon: "🎸" },
  { name: "Java", category: "Programming", icon: "☕" },
  { name: "MySQL", category: "Database", icon: "🗄️" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Git", category: "Tools", icon: "🔧" },
  { name: "GitHub", category: "Tools", icon: "🐙" },
  { name: "Figma", category: "Tools", icon: "🎯" },
];

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Programming",
  "Database",
  "Tools",
];

const projects = [
  {
    number: "01",
    title: "SkillSwap",
    description:
      "A student skill-sharing platform where students can showcase skills, discover learning opportunities, and connect with other students.",
    technologies: ["React.js", "HTML", "CSS", "Node.js", "Express.js", "PostgreSql"],
    icon: RefreshCw,
    color: "purple",
    label: "COMMUNITY PLATFORM",
    github: "https://github.com/nagaudaybhaskarerothu",
    demo: "",
  },
  {
    number: "02",
    title: "Question Paper Generator",
    description:
      "A web application concept for organizing questions and generating question papers through a structured workflow.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSql"],
    icon: FileText,
    color: "blue",
    label: "EDUCATION TOOL",
    github: "https://github.com/nagaudaybhaskarerothu",
    demo: "",
  },
  {
    number: "03",
    title: "E-Commerce Website",
    description:
      "A responsive shopping interface with product listings, product cards, and a user-friendly browsing experience.",
    technologies: ["React.js", "Bootstrap", "JavaScript"],
    icon: ShoppingBag,
    color: "pink",
    label: "ONLINE STORE",
    github: "https://github.com/nagaudaybhaskarerothu",
    demo: "",
  },
  {
    number: "04",
    title: "Notes App",
    description:
      "A note-taking application for recording ideas, organizing notes, and accessing saved information.",
    technologies: ["React.js", "CSS", "Local Storage"],
    icon: NotebookPen,
    color: "mint",
    label: "PRODUCTIVITY",
    github: "https://github.com/nagaudaybhaskarerothu",
    demo: "",
  },
  {
    number: "05",
    title: "To-Do App",
    description:
      "A task management application for adding tasks and organizing daily work in a simple interface.",
    technologies: ["React.js", "JavaScript", "CSS"],
    icon: ListTodo,
    color: "orange",
    label: "TASK MANAGEMENT",
    github: "https://github.com/nagaudaybhaskarerothu",
    demo: "",
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Ideal Institute of Technology, Kakinada",
    period: "2024 – 2027",
    result: "Expected graduation: 2027",
    icon: "🎓",
  },
  {
    degree: "Diploma — Computer Engineering",
    institution: "Kakinada Institute of Technology and Science",
    period: "2021 – 2024",
    result: "Percentage: 80%",
    icon: "💻",
  },
  {
    degree: "SSC — 10th Grade",
    institution: "Sri Rama Krishna (E.M.) School",
    period: "Completed",
    result: "Percentage: 95%",
    icon: "📚",
  },
];

const profiles = [
  {
    name: "GitHub",
    description: "Code and repositories",
    url: "https://github.com/nagaudaybhaskarerothu",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    description: "Professional profile",
    url: "https://www.linkedin.com/in/naga-uday-bhaskar-erothu/",
    icon: <FaLinkedin />,
  },
  {
    name: "LeetCode",
    description: "Coding practice profile",
    url: "https://leetcode.com/u/NagaUdayBhaskar/",
    icon: <SiLeetcode />,
  },
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  delay: `${(index % 7) * -0.8}s`,
  duration: `${5 + (index % 5)}s`,
}));

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const animatedTitle = useTypingEffect(jobTitles, 90, 45);

  // Replace this placeholder with your actual email.
  const email = "nagaudaybhaskarerothu@gmail.com";

  const filteredSkills = skills.filter((skill) => {
    if (activeFilter === "All") {
      return true;
    }

    return skill.category === activeFilter;
  });

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6 },
    },
  };

  return (
    <div className="portfolio">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <div className="particle-layer" aria-hidden="true">
        {particles.map((particle) => (
          <span
            className="particle"
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="navbar container">
          <a className="logo" href="#home" onClick={closeMenu}>
            Bhaskar<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a className="header-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={17} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="availability">
              <span className="availability-dot" />
              COMPUTER SCIENCE STUDENT
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Naga Uday
              <br />
              Bhaskar <span>Erothu.</span>
            </h1>

            <h2 className="hero-role">
              {animatedTitle}
              <span className="typing-cursor">|</span>
            </h2>

            <p className="hero-subtitle">
              B.Tech CSE Student · Class of 2027
            </p>

            <p className="hero-description">
              I build modern, responsive, and user-friendly web experiences
              with React.js. I enjoy turning ideas into real projects and
              exploring new technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View My Projects <ArrowRight size={18} />
              </a>

              <a href="#contact" className="button button-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={profiles[0].url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={profiles[1].url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href={profiles[2].url}
                target="_blank"
                rel="noreferrer"
                className="social-icon leetcode-icon"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>

              <a
                href={`mailto:${email}`}
                className="social-icon"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </motion.div>

          {/* PROFILE PHOTO AND ANIMATIONS */}
          <motion.div
            className="profile-column"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <motion.div
              className="profile-orbit orbit-one"
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="profile-orbit orbit-two"
              animate={prefersReducedMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="profile-frame"
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.035 }}
            >
              <img
                src="/images/bhaskar-profile.jpg"
                alt="Naga Uday Bhaskar Erothu"
                className="profile-image"
                onError={(event) => {
                  console.error(
                    "Profile image failed to load:",
                    event.currentTarget.src
                  );
                }}
              />
            </motion.div>

            <motion.div
              className="floating-badge profile-badge"
              animate={prefersReducedMotion ? {} : { y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="badge-dot" />
              Open to Opportunities
            </motion.div>

            <motion.div
              className="location-badge"
              animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <MapPin size={18} />
              Kakinada, Andhra Pradesh, India
            </motion.div>

            <div className="profile-caption">
              BUILD. LEARN. CREATE.
              <span className="caption-line" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="section container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="section-heading">
            <span className="section-kicker">GET TO KNOW ME</span>
            <h2>
              About <span>Me</span>
            </h2>
            <p>A little about my journey in technology.</p>
          </div>

          <motion.div
            className="about-card panel"
            whileHover={{ borderColor: "#7147b8" }}
          >
            <div className="section-icon">
              <UserRound size={23} />
            </div>

            <div>
              <h3>Curious mind. Developer in progress.</h3>
              <p>
                I am a B.Tech Computer Science and Engineering student
                passionate about web development, problem solving, and
                continuous learning. I enjoy creating interactive web
                applications and improving my skills through hands-on projects.
                My goal is to grow into a skilled software engineer and build
                useful digital experiences.
              </p>

              <div className="about-tags">
                <span>Frontend Development</span>
                <span>Problem Solving</span>
                <span>Continuous Learning</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          className="section container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="section-heading">
            <span className="section-kicker">MY ACADEMIC JOURNEY</span>
            <h2>
              Education <span>Timeline</span>
            </h2>
            <p>The academic path that brought me here.</p>
          </div>

          <div className="education-list">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                className="education-card panel"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ x: 5 }}
              >
                <div className="education-icon">{item.icon}</div>

                <div className="education-content">
                  <span className="education-period">{item.period}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span className="education-result">{item.result}</span>
                </div>

                <GraduationCap
                  className="education-symbol"
                  size={25}
                />
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="section container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="section-heading">
            <span className="section-kicker">MY TOOLKIT</span>
            <h2>
              Skills &amp; <span>Technologies</span>
            </h2>
            <p>Technologies I have worked with or am learning.</p>
          </div>

          <div className="skill-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-button ${
                  activeFilter === filter ? "filter-active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="skills-grid">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                className="skill-card panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.025 }}
                transition={{ duration: 0.25 }}
              >
                <span className="skill-emoji">{skill.icon}</span>
                <span>{skill.name}</span>
                <ArrowUpRight size={15} className="skill-arrow" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="section container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="section-heading project-heading">
            <div>
              <span className="section-kicker">WHAT I'VE BEEN BUILDING</span>
              <h2>
                Featured <span>Projects</span>
              </h2>
              <p>Selected projects from my development journey.</p>
            </div>

            <a
              href="https://github.com/nagaudaybhaskarerothu"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  className={`project-card panel project-${project.color}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{
                    y: -7,
                    rotateX: -1.5,
                    rotateY: 1.5,
                    scale: 1.01,
                  }}
                  style={{ transformPerspective: 900 }}
                >
                  <div className="project-art">
                    <span className="project-number">{project.number}</span>

                    <motion.div
                      className="project-icon-shell"
                      animate={
                        prefersReducedMotion
                          ? {}
                          : { y: [0, -6, 0], rotate: [0, 2, 0] }
                      }
                      transition={{
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="project-icon-halo" />

                      <div className="project-icon-inner">
                        <ProjectIcon size={42} strokeWidth={1.7} />
                      </div>

                      <Sparkles
                        className="project-sparkle sparkle-one"
                        size={17}
                      />
                      <Sparkles
                        className="project-sparkle sparkle-two"
                        size={12}
                      />
                    </motion.div>

                    <span className="project-art-label">{project.label}</span>
                  </div>

                  <div className="project-info">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span className="project-counter">{project.number}</span>
                    </div>

                    <p>{project.description}</p>

                    <div className="technology-tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link project-link-primary"
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      ) : (
                        <span className="project-link project-link-disabled">
                          Demo not added
                        </span>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="project-footnote">
            Update each project with its actual GitHub repository and live
            demo URL.
          </p>
        </motion.section>

        {/* CODING PROFILES */}
        <motion.section
          className="section container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="section-heading">
            <span className="section-kicker">FIND ME ONLINE</span>
            <h2>
              Coding <span>Profiles</span>
            </h2>
            <p>Explore my code, solutions, and professional journey.</p>
          </div>

          <div className="profiles-grid">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="profile-link-card panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="profile-link-icon">{profile.icon}</span>
                <span className="profile-link-copy">
                  <strong>{profile.name}</strong>
                  <small>{profile.description}</small>
                </span>
                <ArrowUpRight size={17} />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="section container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="contact-panel panel">
            <div className="contact-orb" />

            <span className="section-kicker">LET'S CONNECT</span>
            <h2>
              Have an idea? Let's <span>talk.</span>
            </h2>

            <p>
              I'm open to learning opportunities, collaboration, and
              conversations about web development.
            </p>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${email}`}>
                <Mail size={16} />
                Email Me
              </a>

              <button className="button button-outline" onClick={copyEmail}>
                <Copy size={15} />
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="contact-social-links">
              {profiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.icon}
                  {profile.name}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="footer container">
        <a className="logo" href="#home">
          Bhaskar<span>.</span>
        </a>

        <p>
          Designed &amp; built with React.js <span>✦</span>
        </p>

        <a href="#home">Back to top ↑</a>

        <small>
          © {new Date().getFullYear()} Naga Uday Bhaskar Erothu
        </small>
      </footer>
    </div>
  );
};

export default App;
