import Header from "./components/Header";
import ProjectSection from "./components/Project";
import TechyonProjectTable from "./components/Table";
import TopNavHeader from "./components/TopNavHeader";
import "./style/index.scss";

function App() {
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
    <div className="app">
      {/* <Header />
      <ProjectSection
        title="Not Started"
        projects={projectData.filter((p) => p.status === "not-started")}
      />
      <ProjectSection
        title="In Progress"
        projects={projectData.filter((p) => p.status === "in-progress")}
      />
      <ProjectSection
        title="Archived"
        projects={projectData.filter((p) => p.status === "archived")}
      />
      <ProjectSection
        title="Completed"
        projects={projectData.filter((p) => p.status === "completed")}
      /> */}

     <TopNavHeader/>

      {/* <TechyonProjectTable /> */}
    </div>
  );
}

export default App;
