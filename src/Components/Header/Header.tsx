import { TextField } from "@mui/material";
import "./header.css";

interface Sidebar {
  sidebar: Boolean;
}

const Header = ({ sidebar }: Sidebar) => {
  return (
    <div className={`headers ${sidebar ? "open" : ""}`}>
      <div className="sec1">
        <span className="material-symbols-outlined">account_circle</span>
        <p>Om Nigam</p>
      </div>
      <div className="sec2">
        <span className="material-symbols-outlined">settings</span>
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </div>
    </div>
  );
};

export default Header;
