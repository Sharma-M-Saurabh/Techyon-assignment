import React, { useState } from "react";
import {
  AccessPoint,
  EndDateIcon,
  FolderIcon,
  OwnerIcon,
  StartDateIcon,
  StatusIcon,
  TaskIcon,
} from "../assets/Icons";
import OwnerImg from "../assets/owner.png";

const TechyonProjectTable = () => {
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const AllProjectData = [
    {
      id: 1,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 2,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "In Progress",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 3,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Completed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 4,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Archived",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 5,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 6,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 7,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 8,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 9,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 10,
      proj_name: "Techynon Software",
      owner: "Techynon",
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
  ];

  return (
    <div className="tableContainer">
      <table style={{fontSize : '12px'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <div className="table-header">
                <div>
                  <FolderIcon />
                </div>
                <div>Project Name</div>
              </div>
            </th>
            <th>%</th>
            <th>
              <div className="table-header">
                <div>
                  <OwnerIcon />
                </div>
                <div>Owner</div>
              </div>
            </th>
            <th>
              <div className="table-header">
                <div>
                  <FolderIcon />
                </div>
                <div>Tasks</div>
              </div>
            </th>
            <th>
              <div className="table-header">
                <div>
                  <StatusIcon />
                </div>
                <div>Status</div>
              </div>
            </th>
            <th>
              <div className="table-header">
                <div>
                  <StartDateIcon />
                </div>
                <div>Start Date</div>
              </div>
            </th>
            <th>
              <div className="table-header">
                <div>
                  <EndDateIcon />
                </div>
                <div>End Date</div>
              </div>
            </th>
          </tr>
        </thead>
        {AllProjectData.map((data, key) => {
          return (
            <tbody>
              <tr
                key={data.id}
                onMouseEnter={() => setHoveredRowId(data.id)}
                onMouseLeave={() => setHoveredRowId(null)}
              >
                <td>{data.id}</td>

                <td
                  className="project-name-cell relative"
                  
                >
                  {data.proj_name}
                  {hoveredRowId === data.id && (
                  <div
                    className="hover-div access-point-container"
                    
                  >
                    <button
                      className="access-project-button access-point"
                      
                    >
                      <AccessPoint /> Access Project
                    </button>
                  </div>
                   )}
                </td>
                <td>50%</td>
                <td className="owner">
                  <img src={OwnerImg} alt="Owner" />
                  <span>{data.owner}</span>
                </td>

                <td className="">
                  <div className="tasks">
                    <span>10</span>
                    <div className="progressBar">
                      <div className="progress"></div>
                    </div>
                    <span className="percentage">50%</span>
                  </div>
                </td>

                <td
                  className={`${
                    data.status === "Not Started"
                      ? "grey"
                      : data.status === "Archived"
                      ? "dark-green"
                      : data.status === "Completed"
                      ? "primary-green"
                      : "blue-color"
                  }`}
                >
                  {data.status}
                </td>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TechyonProjectTable;
