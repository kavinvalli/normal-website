import { useEffect, useState } from "react";
import ProjectHero from "../components/page/Projects/ProjectHero";
import styles from "../styles/Projects.module.scss";

function Projects() {
  const [_, setDo] = useState("");
  useEffect(() => {
    setTimeout(() => setDo("aaaa"), 1000);
  }, []);
  if (typeof projects !== "undefined") {
    return (
      <div className="container" style={{ marginBottom: "30px" }}>
        <ProjectHero />
        <div className={styles.allProjects}>
          {projects.map((project, idx) =>
            idx < 2 ? (
              <LargeProjectCard project={project} />
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
    <div
      className={styles.largeProjectCard}
      style={{
        backgroundImage: `url("https://kavin.me/images/projects/${largeImage}")`,
      }}
    >
      <div className="content">
        <p style={{ fontSize: "24px" }}>{name}</p>
        <p style={{ fontSiz: "12px" }}>{description}</p>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { name, description, image, link } = project;

  const MAXLENGTH = 30;
  const truncateString = (string) =>
    string.length > MAXLENGTH ? `${string.substring(0, MAXLENGTH)}...` : string;

  return (
    <div className={styles.projectCard}>
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
    </div>
  );
};

export default Projects;
