import React, { useState } from "react";
import ProjectSection from "../components/Project";
import { DownArrow, FilterIcon, Grid, List, Menus } from "../assets/Icons";
import Delayed from "../assets/delayed-badge.png";
import OnTrack from "../assets/on-track-badge.png";
import TechyonProjectTable from "../components/Table";
import TechyonTaskTable from "../components/TechyonTasksTable";

const Project = () => {
  const [gridProjectList, setGridProjectList] = useState("grid");
  const projectData = [
    {
      status: "not-started",
      id: "P-11",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
    {
      status: "in-progress",
      id: "P-12",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
    {
      status: "archived",
      id: "P-13",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
    {
      status: "completed",
      id: "P-14",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
  ];
  return (
    <>
      <div className="project-container">
        <header>
          <div className="header-content">
            <h4 className="projects">Projects</h4>
            <button className="add-project project-button">+ Projects</button>
          </div>
          <div className="breadcrumb">
            <span className="dashboard">
              Dashboard /{" "}
              <span className="project-overview">Project Overview</span>
            </span>
          </div>
        </header>

        <div className="filter-section">
          <div className="filter-left">
            <span className="all-project">All Projects</span>
            <span>
              <DownArrow />
            </span>
          </div>
          <div className="filter-right">
            <span onClick={() => setGridProjectList("list")}>
              <List gridTaskList={gridProjectList}/>
            </span>
            <span onClick={() => setGridProjectList("grid")}>
              <Grid gridTaskList={gridProjectList} />
            </span>
            {gridProjectList == "list" && (
              <span>
                <FilterIcon />
              </span>
            )}

            <span>
              <Menus />
            </span>
          </div>
        </div>

        {gridProjectList == "grid" ? (
          <>
            <div className="project-card">
              <div className="project-status ">
                <div className="grey card-status">Not Started 2</div>
                <div className="blue-color card-status">In Progress 2</div>
                <div className="dark-green card-status">Archived 2</div>
                <div className="primary-green card-status">Completed 2</div>
              </div>

              <div className="project-grid">
                <ProjectSection
                  title="Not Started"
                  projects={projectData.filter(
                    (p) => p.status === "not-started"
                  )}
                />
                <ProjectSection
                  title="In Progress"
                  projects={projectData.filter(
                    (p) => p.status === "in-progress"
                  )}
                />
                <ProjectSection
                  title="Archived"
                  projects={projectData.filter((p) => p.status === "archived")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
              </div>
              <div className="project-status ">
                <div className="view-more">view more</div>
                <div className="view-more">view more</div>
                <div className="view-more">view more</div>
                <div className="view-more">view more</div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <TechyonProjectTable />
          </>
        )}
      </div>
    </>
  );
};
const Task = () => {
  const [gridTaskList, setGridTaskList] = useState("grid");
  const projectData = [
    {
      status: "not-started",
      id: "P-11",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
    {
      status: "in-progress",
      id: "P-12",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
    {
      status: "archived",
      id: "P-13",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
    {
      status: "completed",
      id: "P-14",
      progress: 50,
      dateRange: "01/01/2024 - 31/01/2024",
      teamCount: 10,
      fileCount: 12,
    },
  ];


  return (
    <>
      <div className="project-container">
        <div className="filter-section">
          <div className="filter-left">
            <span className="all-project">All Tasks</span>
            <span>
              <DownArrow />
            </span>
          </div>
          <div className="filter-right">
            <span onClick={() => setGridTaskList("list")}>
              <List gridTaskList={gridTaskList}/>
            </span>
            <span onClick={() => setGridTaskList("grid")}>
              <Grid gridTaskList={gridTaskList}/>
            </span>
            {gridTaskList == "list" && (
              <span>
                <FilterIcon />
              </span>
            )}

            <span>
              <Menus />
            </span>
          </div>
        </div>

        {gridTaskList == "grid" ? (
          <>
            <div className="project-card">
              <div className="project-status ">
                <div className="blue-color card-status">In Progress 2</div>
                <div className="dark-blue card-status">In Review 2</div>
                <div className="dark-black card-status">In Revision 2</div>
                <div className="primary-green card-status">Completed 2</div>
              </div>

              <div className="project-grid">
                <div className="relative">
                  <span className="badge-position">
                    <img src={OnTrack} alt="ontrack badge" />
                  </span>
                  <ProjectSection
                    title="Not Started"
                    projects={projectData.filter(
                      (p) => p.status === "not-started"
                    )}
                  />
                </div>
                <div className="relative">
                  <span className="badge-position">
                    <img src={Delayed} alt="delayed badge" />
                  </span>
                  <ProjectSection
                    title="In Progress"
                    projects={projectData.filter(
                      (p) => p.status === "in-progress"
                    )}
                  />
                </div>

                <div className="relative">
                  <span className="badge-position">
                    <img src={OnTrack} alt="ontrack badge" />
                  </span>
                  <ProjectSection
                    title="Archived"
                    projects={projectData.filter(
                      (p) => p.status === "archived"
                    )}
                  />
                </div>
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
                <ProjectSection
                  title="Completed"
                  projects={projectData.filter((p) => p.status === "completed")}
                />
              </div>
              <div className="project-status ">
                <div className="view-more">view more</div>
                <div className="view-more">view more</div>
                <div className="view-more">view more</div>
                <div className="view-more">view more</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <TechyonTaskTable />
          </>
        )}
      </div>
    </>
  );
};

const ProjectContainer = () => {
  return (
    <div className="full-width-container">
      <Project />
      <Task />
    </div>
  );
};

export default ProjectContainer;
