import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

// --- SVG Icons ---
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const GithubIcon = ({className = "w-6 h-6"}) => <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" /></svg>;
const LinkedInIcon = ({className = "w-6 h-6"}) => <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const EmailIcon = ({className = "w-6 h-6"}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>;
const CodeBracketIcon = ({className = "w-10 h-10"}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>;
const RocketLaunchIcon = ({className = "w-10 h-10"}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56v4.82a6 6 0 01-1.84-1.31L12 16.17l-1.75 1.75a6 6 0 01-2.33 1.31v-4.82m5.84-2.56a6 6 0 00-6 0c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const CertificateIcon = ({className = "w-10 h-10"}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25a3 3 0 00-5.76-1.065 3.003 3.003 0 00-1.034 5.76M15.75 11.25L18 9.75m-2.25 1.5L18 12.75m-2.25-1.5L15.75 15m2.25-3.75H18" /></svg>;
const BriefcaseIcon = ({className = "w-10 h-10"}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v-2.25a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const GraduationCapIcon = ({className = "w-10 h-10"}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>;


// --- Data ---
const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
];

const skillsData = [
    { name: 'Java', level: '90%', icon: <CodeBracketIcon /> },
    { name: 'JavaScript', level: '90%', icon: <CodeBracketIcon /> },
    { name: 'HTML & CSS', level: '85%', icon: <CodeBracketIcon /> },
    { name: 'Spring MVC', level: '80%', icon: <CodeBracketIcon /> },
    { name: 'Spring Boot', level: '80%', icon: <CodeBracketIcon /> },
    { name: 'Hibernate/JPA', level: '75%', icon: <CodeBracketIcon /> },
    { name: 'JDBC', level: '80%', icon: <CodeBracketIcon /> },
    { name: 'MySQL', level: '80%', icon: <CodeBracketIcon /> },
    { name: 'PostgreSQL', level: '80%', icon: <CodeBracketIcon /> },
    { name: 'Git & GitHub', level: '90%', icon: <GithubIcon className="w-10 h-10"/> },
    { name: 'React.js', level: '90%', icon: <CodeBracketIcon /> },
];


const experienceData = [
    {
        type: 'Work',
        title: 'Junior Software Developer',
        company: 'Vanspecto',
        location: 'Remote (Pune, India)',
        duration: 'June 2024 – Present',
        responsibilities: [
            'Developed responsive front-end interfaces using React.js, HTML, CSS, and Bootstrap.',
            'Integrated RESTful APIs into front-end components, enabling real-time display of inspection summaries and improving user interaction speed.',
            'Improved UI consistency and cross-device compatibility by refactoring layout components and applying reusable design patterns.',
            'Participated in debugging and front-end optimization, reducing component load time and enhancing user experience.',
        ],
        icon: <BriefcaseIcon />
    },
    {
        type: 'Training',
        title: 'Full-Stack Developer Trainee',
        company: 'JSpiders Training Institute',
        location: 'Pune, India',
        duration: 'Dec 2023 – May 2024',
        responsibilities: [
            'Completed intensive full-stack development training with a focus on Java, Spring Boot, Hibernate, JDBC, and React.js.',
            'Designed and developed scalable full-stack applications with React.js, Spring Boot, and PostgreSQL.',
            'Created and integrated RESTful APIs for user management, data exchange, and secure authentication.',
            'Implemented complex backend logic using JDBC and optimized SQL performance.',
            'Built dynamic and responsive front-end components, enhancing overall user experience.',
        ],
        icon: <GraduationCapIcon />
    }
];


const projectsData = [
    {
        title: 'URL Shortly Website',
        description: 'The project aims to provide a URL shortening service, allowing users to convert long URLs into shorter ones.',
        tech: ['React', 'Node.js', 'MongoDB', 'HTML', 'SCSS', 'JavaScript'],
        imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=rb-4.0.3&auto=format&fit=crop&w=800&q=60', // URL image-related
        liveLink: 'https://utkarssh11.github.io/URL-Shortly/',
        repoLink: 'https://github.com/Utkarssh11/URL-Shortly',
    },
    {
        title: 'Dyna Prime',
        description: 'Dynaprime is a sleek and futuristic website that showcases a range of productivity software.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', // Sleek, modern UI image
        liveLink: 'https://utkarsh11-dynaprime.netlify.app/',
        repoLink: 'https://github.com/Utkarssh11/DynaPrime',
    },
   
    
    {
        title: 'Dyna Care',
        description: 'One stop solution for developers to take care of their health!',
        tech: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', // Sleek, modern UI image
        liveLink: 'https://dynacare-utkarssh11.vercel.app/',
        repoLink: 'https://github.com/Utkarssh11/Dyna-Care',
    },
    {
        title: 'Sleek UI Library',
        description: 'Sleek UI is a CSS component library that will help you to build your websites faster.',
        tech: ['CSS', 'JavaScript'],
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', // Sleek, modern UI image
        liveLink: 'https://utkarssh11.github.io/sleekUI-library/',
        repoLink: 'https://github.com/Utkarssh11/sleekUI-library',
    },
    {
        title: 'Personalized Health Management Platform',
        description: 'A health management platform for patients, doctors, and caregivers to manage health data and receive medication, lifestyle, and improvement notifications.',
        tech: ['Java 11', 'Spring Boot', , 'PostgreSQL', 'React.js'],
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', // Sleek, modern UI image
        liveLink: '#',
        repoLink: '#',
    },
];

const achievementsData = [
    { title: 'Stark Industries Innovator Award', year: '2024', desc: 'Recognized for outstanding innovation in software development projects.', icon: <RocketLaunchIcon /> },
    { title: 'Advanced Web Development Certification', year: '2023', desc: 'Completed comprehensive certification from Dev Institute, mastering modern stacks.', icon: <CertificateIcon /> },
    { title: 'Top 5% - CodeMaster Challenge', year: '2023', desc: 'Achieved high ranking in a competitive global coding challenge with 1000+ participants.', icon: <CodeBracketIcon /> },
];

// --- Hooks ---
const useScrollReveal = (options = { threshold: 0.1, triggerOnce: true }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        if (options.triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            options
        );

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, [options]);
};


// --- Components ---
const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-lg shadow-lg transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="text-2xl font-bold text-primary dark:text-secondary transition-colors">Utkarsh Patidar</a>
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-200">{link.label}</a>
                        ))}
                        <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2 rounded-full text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-200">
                            {darkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                         <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2 mr-2 rounded-full text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                            {darkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded={mobileMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">{link.label}</a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/70 to-purple-600/70 dark:from-blue-900/70 dark:via-purple-900/70 dark:to-indigo-900/70 animation-pulse-slow"></div>
            <div className="absolute inset-0 parallax-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80')", opacity: 0.1}}></div>

            <div className="relative z-10 space-y-8 reveal">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white dark:text-gray-100 animate-subtle-bob"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    Utkarsh Patidar
                </h1>
                <p className="max-w-2xl mx-auto text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 dark:text-gray-300"
                   style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    Software Developer | React.js, Java, Spring Boot, PostgreSQL Enthusiast | Crafting Digital Solutions
                </p>
                <a href="#projects" className="inline-block px-10 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark transform hover:scale-105 transition duration-300 ease-in-out shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkBg focus:ring-primary dark:focus:ring-secondary">
                    Explore My Work
                </a>
            </div>
             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <a href="#about" aria-label="Scroll down">
                    <svg className="w-10 h-10 text-white opacity-75 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

const SectionWrapper = ({ id, title, children, className = "", bgClassName = "" }: {id: string, title: string, children: React.ReactNode, className?: string, bgClassName?: string}) => (
    <section id={id} className={`py-16 sm:py-24 ${bgClassName}`}>
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-lightText dark:text-darkText reveal">
                {title}
            </h2>
            {children}
        </div>
    </section>
);

const AboutSection = () => (
    <SectionWrapper id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-center space-y-6 reveal">
            {/* <img src="https://via.placeholder.com/150/3B82F6/FFFFFF?Text=UP" alt="Utkarsh Patidar" className="w-32 h-32 rounded-full mx-auto mb-8 shadow-xl border-4 border-white dark:border-slate-700" /> */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm Utkarsh, a passionate software developer with a strong focus on building innovative and user-centric digital solutions.
                I specialize in front-end and back-end development, crafting sleek interfaces with React.js and creating robust systems with Java, Spring Boot, and PostgreSQL.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I thrive on solving complex problems and turning them into simple, elegant solutions. My goal is always to deliver high-quality software that not only meets but exceeds user expectations.
                Whether it's developing interactive web applications or optimizing back-end systems, I'm committed to continuous learning and mastering new technologies to stay ahead in the fast-evolving tech world.
            </p>
        </div>
    </SectionWrapper>
);

const SkillsSection = () => (
    <SectionWrapper id="skills" title="My Skills" bgClassName="bg-lightAccent dark:bg-darkAccent">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {skillsData.map((skill, index) => (
                <div key={index} className="reveal p-6 bg-lightCard dark:bg-darkCard rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary dark:text-secondary">
                        {React.cloneElement(skill.icon, { className: "w-12 h-12" })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-lightText dark:text-darkText">{skill.name}</h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-1 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-skill-level={skill.level}></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level} Proficient</p>
                </div>
            ))}
        </div>
    </SectionWrapper>
);

const ExperienceSection = () => (
    <SectionWrapper id="experience" title="My Experience & Training">
        <div className="max-w-4xl mx-auto space-y-12">
            {experienceData.map((item, index) => (
                <div key={index} className="reveal flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 bg-lightCard dark:bg-darkCard rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300">
                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary mx-auto md:mx-0">
                        {React.cloneElement(item.icon, { className: "w-10 h-10 md:w-12 md:h-12" })}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold text-lightText dark:text-darkText mb-1">{item.title}</h3>
                        <p className="text-md font-medium text-primary dark:text-secondary mb-0.5">
                            {item.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-0.5">
                            {item.duration} <span className="text-gray-500 dark:text-gray-500 mx-1">|</span> {item.location}
                        </p>
                        <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 text-left">
                            {item.responsibilities.map((resp, i) => (
                                <li key={i} className="pl-2 leading-relaxed">{resp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
);

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
    <div className="reveal bg-lightCard dark:bg-darkCard rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col group">
        <div className="relative overflow-hidden h-56">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold mb-3 text-lightText dark:text-darkText">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
            <div className="mb-5">
                <h4 className="text-xs font-semibold mb-2 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <span key={t} className="px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary text-xs font-medium rounded-full">{t}</span>)}
                </div>
            </div>
            <div className="mt-auto flex space-x-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                {project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center flex-1 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors">
                        Live Demo <ExternalLinkIcon />
                    </a>
                )}
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-lightText dark:text-darkText bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors">
                    GitHub <GithubIcon className="w-5 h-5 ml-1.5" />
                </a>
            </div>
        </div>
    </div>
);

const ProjectsSection = () => (
    <SectionWrapper id="projects" title="My Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsData.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    </SectionWrapper>
);


const AchievementsSection = () => (
    <SectionWrapper id="achievements" title="Achievements & Certifications" bgClassName="bg-lightAccent dark:bg-darkAccent">
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="reveal flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-lightCard dark:bg-darkCard rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"  //icon leetcode
                        alt="LeetCode" 
                        className="w-12 h-12 object-cover"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightText dark:text-darkText">LeetCode Top 8.75% <span className="text-sm text-gray-500 dark:text-gray-400">(2024)</span></h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                        Solved 200+ problems on LeetCode, with a rating of 1806, ranking in the top 8.75%.
                    </p>
                </div>
            </div>

            <div className="reveal flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-lightCard dark:bg-darkCard rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary">
                    <img 
                        src="https://img.icons8.com/?size=512&id=AbQBhN9v62Ob&format=png" 
                        alt="LeetCode" 
                        className="w-12 h-12 object-cover"
                    />
                </div>


                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightText dark:text-darkText">LeetCode Contest Rank 917 <span className="text-sm text-gray-500 dark:text-gray-400">(2024)</span></h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                        Ranked 917th in LeetCode Contest 331 out of 22,489 participants.
                    </p>
                </div>
            </div>

            <div className="reveal flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-lightCard dark:bg-darkCard rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary">
                    <img 
                        src="https://img.icons8.com/?size=512&id=AbQBhN9v62Ob&format=png" //gfg icon
                        alt="LeetCode" 
                        className="w-12 h-12 object-cover"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightText dark:text-darkText"> First Rank in Institution on GFG <span className="text-sm text-gray-500 dark:text-gray-400">(2024)</span></h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                        Scored 1700+ on GeeksforGeeks and secured first rank in my institute.
                    </p>
                </div>
            </div>

            <div className="reveal flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-lightCard dark:bg-darkCard rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary">
                    <img 
                        src="https://img.icons8.com/?size=512&id=AbQBhN9v62Ob&format=png" 
                        alt="LeetCode" 
                        className="w-12 h-12 object-cover"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightText dark:text-darkText">GeeksforGeeks Mega Job-A-Thon <span className="text-sm text-gray-500 dark:text-gray-400">(2024)</span></h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                        Earned a perfect score of 100/100 in the GeeksforGeeks Mega Job-A-Thon.
                    </p>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

const ContactSection = () => (
    <SectionWrapper id="contact" title="Get In Touch">
        <div className="max-w-xl mx-auto text-center reveal">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                I'm always excited to connect and discuss new projects, opportunities, or just chat about technology.
                Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-8 mb-12">
                <a href="mailto:utkarsh.patidar011@example.com" aria-label="Email Utkarsh" className="text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition-colors duration-300 transform hover:scale-110">
                    <EmailIcon className="w-8 h-8"/>
                </a>
                <a href="https://www.linkedin.com/in/utkarsh-patidar-800081221/" target="_blank" rel="noopener noreferrer" aria-label="Utkarsh's LinkedIn" className="text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition-colors duration-300 transform hover:scale-110">
                    <LinkedInIcon className="w-8 h-8"/>
                </a>
                <a href="https://github.com/Utkarssh11" target="_blank" rel="noopener noreferrer" aria-label="Utkarsh's GitHub" className="text-lightText dark:text-darkText hover:text-primary dark:hover:text-secondary transition-colors duration-300 transform hover:scale-110">
                    <GithubIcon className="w-8 h-8"/>
                </a>
            </div>
            
            <form onSubmit={(e) => {e.preventDefault(); alert("Form submitted (visual only)!");}} className="mt-10 space-y-6 max-w-lg mx-auto p-8 bg-lightCard dark:bg-darkCard rounded-xl shadow-xl">
                <h3 className="text-xl font-semibold text-lightText dark:text-darkText mb-4">Send a Message (Visual Only)</h3>
                <div>
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input type="text" name="name" id="name" autoComplete="name" required
                           className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary dark:focus:ring-secondary focus:border-primary dark:focus:border-secondary sm:text-sm bg-white dark:bg-slate-700 text-lightText dark:text-darkText placeholder-gray-400 dark:placeholder-gray-500" placeholder="Your Name"/>
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input type="email" name="email" id="email" autoComplete="email" required
                           className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary dark:focus:ring-secondary focus:border-primary dark:focus:border-secondary sm:text-sm bg-white dark:bg-slate-700 text-lightText dark:text-darkText placeholder-gray-400 dark:placeholder-gray-500" placeholder="Your Email"/>
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" rows={4} required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary dark:focus:ring-secondary focus:border-primary dark:focus:border-secondary sm:text-sm bg-white dark:bg-slate-700 text-lightText dark:text-darkText placeholder-gray-400 dark:placeholder-gray-500" placeholder="Your Message..."></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark dark:focus:ring-secondary-dark transition-colors">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </SectionWrapper>
);

const Footer = () => (
    <footer className="bg-lightBg dark:bg-darkBg border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Utkarsh Patidar. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Crafted with <span role="img" aria-label="heart emoji" className="text-red-500">❤️</span> using React & Tailwind CSS.
            </p>
        </div>
    </footer>
);

const App = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedMode = localStorage.getItem('darkMode');
            // Check if window.matchMedia is available (not in SSR or old browsers)
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedMode ? JSON.parse(savedMode) : prefersDark;
        }
        return false; // Default to light mode if localStorage or matchMedia is not available
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('darkMode', JSON.stringify(darkMode));
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    useScrollReveal(); 

    // Skill bar animation
    useEffect(() => {
        const skillBars = document.querySelectorAll<HTMLElement>('[data-skill-level]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target as HTMLElement;
                        // Add a delay for a more staggered/smooth animation if desired
                        setTimeout(() => {
                           bar.style.width = bar.dataset.skillLevel || '0%';
                        }, 100); 
                        observer.unobserve(bar);
                    }
                });
            },
            { threshold: 0.5 } 
        );
        skillBars.forEach(bar => observer.observe(bar));
        return () => skillBars.forEach(bar => observer.unobserve(bar));
    }, []);


    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <AchievementsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
