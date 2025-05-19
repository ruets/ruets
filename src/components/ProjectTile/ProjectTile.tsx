import "./ProjectTile.scss";

import Icon from "../Icon/Icon";

interface ProjectTileProps {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  repo?: string;
}

function ProjectTile({
  title,
  subtitle,
  description,
  type,
  repo,
}: ProjectTileProps) {
  return (
    <div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">{title}</span>
          <br />
          <span className="card-subtitle">{subtitle}</span>
          <p className="card-content">{description} </p>
          {repo && (
            <a href={repo} target="_blank">
              <span className="repo-button">Dépôt Github</span>
            </a>
          )}
        </div>
        <div className="icon-box">
          <Icon name={type} />
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
