import React from "react";
import ProjectContainer from "../views/ProjectContainer";
import {
  Bell,
  Search,
  Setting,
  SidebarDocs,
  SidebarExplore,
  SidebarFolder,
  SidebarGrid,
  SidebarHelp,
  SidebarHome,
  SidebarLike,
  SidebarLine,
  SidebarMenu,
  SidebarPeople,
  SidebarPlus,
  SidebarProgramming,
  SidebarScroll,
  SidebarSearch,
  Volume,
} from "../assets/Icons";
import ProfileImg from "../assets/profile.png";

const TopNavHeader = () => {
  const SideBarICons = [
    <SidebarPlus />,
    <SidebarHome />,
    <SidebarFolder />,
    <SidebarExplore />,
    <SidebarProgramming />,
    <SidebarSearch />,
    <SidebarScroll />,
    <SidebarDocs />,
    <SidebarPeople />,
    <SidebarLine />,
    <SidebarGrid />,
    <SidebarHelp />,
    <SidebarLike />,
  ];
  return (
    <>
      {/* Top Navbar */}
      <div className="top-nav-header">
        <div className="flex-center gap">
          <div className="border-right">
            <SidebarMenu />
          </div>
          <div className="logo">TECHYON</div>
        </div>
        <div className="nav-items">
          <div>
            <Search />
          </div>
          <div>
            <Setting />
          </div>
          <div>
            <Volume />
          </div>
          <div>
            <Bell />
          </div>
          <div className="profile">
            <img className="profile-img" src={ProfileImg} alt="profile" />
          </div>
        </div>
      </div>

      <div className="layout">
        <div className="sidebar">
          {SideBarICons.map((icons, key) => (
            <div key={key}>{icons}</div>
          ))}
        </div>

        <ProjectContainer />
      </div>
    </>
  );
};

export default TopNavHeader;
