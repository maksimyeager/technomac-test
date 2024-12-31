import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div className="projects__wrapper">
                    {projects.map((project, index) => {
                        return (
                            <div key={index} className="project">
                                <div className="project__image">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                    />
                                </div>
                                <div className="project__description">
                                    {project.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
