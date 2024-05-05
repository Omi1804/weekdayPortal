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
        <div className="detailedSidebar">
          <form className="profileForm">
            <div className="formGroup">
              <label>First Name</label>
              <input type="text" placeholder="Your first name" />
            </div>
            <div className="formGroup">
              <label>Last Name</label>
              <input type="text" placeholder="Your last name" />
            </div>
            <div className="formGroup">
              <label>Current Salary (LPA)</label>
              <div className="salaryInputs">
                <input type="number" placeholder="Fixed" />
                <input type="number" placeholder="Variable" />
                <input type="number" placeholder="Stocks per year" />
              </div>
            </div>
            <div className="formGroup">
              <label>Expected Salary (LPA)</label>
              <input type="number" placeholder="Expected salary" />
            </div>
            <div className="formGroup">
              <label>Job Search Status</label>
              <select>
                <option>Actively looking out</option>
                <option>Open to opportunities</option>
                <option>Not looking</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Notice Period</label>
              <select>
                <option>Immediate joining</option>
                <option>1 Month</option>
                <option>2 Months</option>
                <option>3 Months</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Email Address</label>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="formGroup">
              <label>WhatsApp Number</label>
              <input type="tel" placeholder="+91" />
            </div>
            <div className="formGroup">
              <label>Upload Resume</label>
              <input type="file" />
            </div>
            <div className="formActions">
              <button type="submit">Update Profile</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="sidebarOverview">
          <div className="profilePhoto">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="line"></div>
          <div className="moreDetails" onClick={handleSidebar}>
            <p>Customize Your Profile</p>
            <span className="material-symbols-outlined">more_up</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
