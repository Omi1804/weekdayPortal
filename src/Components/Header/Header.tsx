import "./header.css";
import { useSelector } from "react-redux";

interface Sidebar {
  sidebar: Boolean;
}

const Header = ({ sidebar }: Sidebar) => {
  const profile = useSelector((state: any) => state.user.profile);
  return (
    <div className={`headers ${sidebar ? "open" : ""}`}>
      <div className="sec1">
        <span className="material-symbols-outlined">account_circle</span>
        <p>
          {profile.firstName.length > 0
            ? `${profile.firstName} ${profile.lastName}`
            : "Om Nigam"}
        </p>
      </div>
      <div className="sec2">
        <span className="material-symbols-outlined">settings</span>
      </div>
    </div>
  );
};

export default Header;
