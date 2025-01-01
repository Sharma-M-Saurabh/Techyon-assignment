import React, { useState } from "react";
import {
  AccessPoint,
  EndDateIcon,
  FolderIcon,
  OwnerIcon,
  StartDateIcon,
  StatusIcon,
  TaskIcon,
  ViewDetails,
} from "../assets/Icons";
import OwnerImg from "../assets/owner.png";

const TechyonTaskTable = () => {
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const AllProjectData = [
    {
      id: 1,
      t_id: "T1",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },

    {
      id: 2,
      t_id: "T2",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",

      status: "On Track",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },
    {
      id: 3,
      t_id: "T3",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",
      status: "Delayed",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },
    {
      id: 4,
      t_id: "T4",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",
      status: "Revision",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },
    {
      id: 5,
      t_id: "T5",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },
    {
      id: 6,
      t_id: "T6",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },
    {
      id: 7,
      t_id: "T7",
      task_name: "Task Number 1",
      asso_team: "Not Associated",
      owner: "Techynon",
      status: "On Track",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      ex_startDate: "00-00-2024",
      ex_endDate: "00-00-2024",
    },
  ];

  return (
    <div className="tableContainer">
      <table style={{ fontSize: "12px" }}>
        <thead>
          <tr>
            <th>
              <div className="table-header">
                <div>
                  <FolderIcon />
                </div>
                <div>Task Name</div>
              </div>
            </th>
            <th>%</th>
            <th>
              <div className="table-header">
                <div>
                  <OwnerIcon />
                </div>
                <div>Association Team</div>
              </div>
            </th>
            <th>
              <div className="table-header">
                <div>
                  <FolderIcon />
                </div>
                <div>Owner</div>
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
            <th>
              <div className="table-header">
                <div>
                  <EndDateIcon />
                </div>
                <div>Exp. Strt Date</div>
              </div>
            </th>
            <th>
              <div className="table-header">
                <div>
                  <EndDateIcon />
                </div>
                <div>Exp. End Date</div>
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
                <td>{data.t_id}</td>

                <td className="project-name-cell relative">
                  {data.task_name}
                  {hoveredRowId === data.id && (
                    <div className="hover-div access-point-container">
                      <button className="access-project-button access-point">
                        <ViewDetails /> View Details
                      </button>
                    </div>
                  )}
                </td>
                <td>{data?.asso_team}</td>
                <td className="owner">
                  <img src={OwnerImg} alt="Owner" />
                  <span>{data.owner}</span>
                </td>

                <td
                  className={`${
                    data.status === "In Review"
                      ? "bg-review"
                      : data.status === "On Track"
                      ? "bg-track"
                      : data.status === "Revision"
                      ? "bg-revision"
                      : "bg-delayed"
                  }`}
                >
                  {data.status}
                </td>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
                <td>{data.ex_startDate}</td>
                <td>{data.ex_endDate}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TechyonTaskTable;
