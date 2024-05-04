import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchArea from "./Components/SearchArea/SearchArea";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    console.log("CLicked");
    setSidebar((prev) => !prev);
  };

  return (
    <div>
      <Header sidebar={sidebar} />
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
      <SearchArea sidebar={sidebar} />
    </div>
  );
};

export default App;
