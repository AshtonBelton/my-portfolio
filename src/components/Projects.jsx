import React from "react";
import '../styles/Projects.css';

const projectsData = [
    {
        title: '',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
    {
        title: '',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
    {
        title: '',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
    {
        title: '',
        description: '',
        techStack: [], 
        demoLink: '',
        codeLink: '',
        date: '',
    },
];

const Projects = () => {
    return (
        <section className="project-section">
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