import "./sidebar.css";

interface SideBar {
  sidebar: Boolean;
  handleSidebar: () => void;
}

const Sidebar = ({ sidebar, handleSidebar }: SideBar) => {
  return (
    <div className={`sidebar ${sidebar === true ? "open" : ""}`}>
      <div className="sidebarOpen" onClick={handleSidebar}>
        {sidebar ? (
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        ) : (
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        )}
      </div>

      {sidebar ? (
        <div className="detailedSidebar"></div>
      ) : (
        <div className="sidebarOverview">
          <div className="profilePhoto">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="line"></div>
          <div className="moreDetails">
            <p>Customize Your Profile</p>
            <span className="material-symbols-outlined">more_up</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
