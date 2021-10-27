import { useEffect, useState } from "react";
import ProjectHero from "../components/page/Projects/ProjectHero";
import styles from "../styles/Projects.module.scss";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const projects = await (
        await fetch("https://www.kavin.me/api/projects", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      ).json();
      setProjects(projects);
    }

    getProjects();
  }, []);

  if (typeof projects !== "undefined") {
    return (
      <div className="container" style={{ marginBottom: "30px" }}>
        <ProjectHero />
        <div className={styles.allProjects}>
          {projects.map((project, idx) =>
            idx < 2 ? (
              <LargeProjectCard project={project} key={idx} />
            ) : (
              <ProjectCard project={project} key={idx} />
            )
          )}
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

const LargeProjectCard = ({ project }) => {
  const { name, description, largeImage, link } = project;

  const MAXLENGTH = 30;
  const truncateString = (string) =>
    string.length > MAXLENGTH ? `${string.substring(0, MAXLENGTH)}...` : string;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.largeProjectCard}
      style={{
        backgroundImage: `url("https://kavin.me/images/projects/${largeImage}")`,
      }}
    >
      <div className="content">
        <p style={{ fontSize: "24px" }}>{name}</p>
        <p style={{ fontSiz: "12px" }}>{description}</p>
      </div>
    </a>
  );
};

const ProjectCard = ({ project }) => {
  const { name, description, image, link } = project;

  const MAXLENGTH = 30;
  const truncateString = (string) =>
    string.length > MAXLENGTH ? `${string.substring(0, MAXLENGTH)}...` : string;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.projectCard}
    >
      <img
        src={`https://kavin.me/images/projects/${image}`}
        height="88"
        width="88"
        alt={`${name} image`}
      />
      <div className="content">
        <p style={{ fontSize: "18px" }}>{truncateString(name)}</p>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Projects;
