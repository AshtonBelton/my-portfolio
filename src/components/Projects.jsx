import React from "react";
import '../styles/Projects.css';

const projectsData = [
    {
        title: 'Memory Card',
        description: 'A memory card game that challenges the user to remember pokemon cards to win the game.',
        techStack: ["React", "JavaScript", "HTML", "CSS"], 
        demoLink: '',
        codeLink: 'https://github.com/AshtonBelton/Memory-Card',
        date: 'Aug, 2024',
    },
    {
        title: 'Inventory Application',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
    {
        title: 'Shopping Cart',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
    {
        title: 'Rock, Paper, Scissors',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
    {
        title: 'Tic Tac Toe',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Made with: {project.techStack.join(', ')}</p>
                        <p>{project.date}</p>
                        <div className="project-links">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;