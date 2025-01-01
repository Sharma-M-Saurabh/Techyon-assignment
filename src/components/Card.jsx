import React from "react";
import { ClipPath, EndDateIcon, FolderIcon, StartDateIcon } from "../assets/Icons";
import TeamImg from "../assets/team.png"

const ProjectCard = ({
  status,
  id,
  progress,
  dateRange,
  teamCount,
  fileCount,
}) => {
  return (
    <div className={`project-inner-card ${status}`}>
      <div className="card-header">
        <div className="project-name">
          <FolderIcon/>

        <div className="card-text">Project Name</div>

        </div>
        <p className="card-text">ID: {id}</p>
      </div>
      <div className="progress-bar">
        <span className="start">07</span>
        <div className="bar">
          <span className="percentage card-text">{progress}%</span>
          <div className="progress " style={{ width: `${progress}%` }}></div>
        </div>
        <span className="end">14</span>
      </div>
      <div className="details">
        <div className="date-section date-text">
          <div><EndDateIcon/></div>

        <div>{dateRange}</div>
        </div>
        <div className="info flex-section">
         <span><img src={TeamImg} alt="Team" /></span>
          <span className="flex-center card-text"><ClipPath/>{fileCount} Files</span>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
