import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../reduxFiles/userSlice";

interface SideBar {
  sidebar: Boolean;
  handleSidebar: () => void;
}

const Sidebar = ({ sidebar, handleSidebar }: SideBar) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.user.profile);

  const handelInputChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateProfile({ [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Profile saved:", profile);
    handleSidebar();
  };

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
          <form className="profileForm" onSubmit={handleSubmit}>
            <h1 className="formHeading">
              Your Profile
              <img src="/linkLogo.png" alt="" />
            </h1>

            <div className="formGroup">
              <h1>
                What do we call you?<span>*</span>
              </h1>
              <div>
                <div className="firstName">
                  <label>First Name</label>
                  <input
                    onChange={handelInputChange}
                    type="text"
                    placeholder="Your first name"
                    name="firstName"
                  />
                </div>
                <div className="lastName">
                  <label>Last Name</label>
                  <input
                    onChange={handelInputChange}
                    type="text"
                    placeholder="Your last name"
                    name="lastName"
                  />
                </div>
              </div>
            </div>

            <div className="formGroup">
              <h1>
                What is your current salary (in LPA)?<span>*</span>
              </h1>
              <div className="salaries">
                <div>
                  <label>Fixed Salary</label>
                  <input
                    onChange={handelInputChange}
                    type="number"
                    placeholder="Fixed"
                    name="currentSalaryFixed"
                  />
                </div>
                <div>
                  <label>Variable</label>
                  <input
                    onChange={handelInputChange}
                    type="number"
                    placeholder="Variable"
                    name="currentSalaryVariable"
                  />
                </div>
                <div>
                  <label>Stocks per year</label>
                  <input
                    onChange={handelInputChange}
                    type="number"
                    placeholder="Stocks per year"
                    name="currentSalaryStocks"
                  />
                </div>
              </div>
            </div>
            <div className="formGroup">
              <h1>
                What is your expected cash salary (in LPA)?<span>*</span>
              </h1>
              <div>
                <div style={{ width: "100%" }}>
                  <input
                    onChange={handelInputChange}
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Expected salary"
                    name="expectedSalary"
                  />
                </div>
              </div>
            </div>
            <div className="formGroup">
              <h1>How likely are you to switch jobs?*</h1>
              <div>
                <div style={{ width: "100%" }}>
                  <select
                    onChange={handelInputChange}
                    style={{ width: "100%" }}
                    name="jobSwitchLikelihood"
                  >
                    <option>Actively looking out</option>
                    <option>Open to opportunities</option>
                    <option>Not looking</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formGroup">
              <h1>Notice Period</h1>
              <div>
                <div>
                  <select onChange={handelInputChange} name="noticePeriod">
                    <option>Immediate joining</option>
                    <option>1 Month</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formGroup">
              <h1>Email Address</h1>
              <div>
                <div>
                  <input
                    onChange={handelInputChange}
                    type="email"
                    placeholder="Your email"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="formGroup">
              <h1>WhatsApp Number</h1>
              <div>
                <div>
                  <input
                    onChange={handelInputChange}
                    type="tel"
                    placeholder="+91"
                    name="whatsappNumber"
                  />
                </div>
              </div>
            </div>
            <div className="formGroup">
              <h1>Upload Resume</h1>
              <div>
                <div>
                  <input
                    onChange={handelInputChange}
                    type="file"
                    name="resume"
                  />
                </div>
              </div>
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
