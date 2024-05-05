import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchArea from "./Components/SearchArea/SearchArea";
import CompanyDetails from "./Components/CompanyDetails/CompanyDetails";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    console.log("CLicked");
    setSidebar((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Header sidebar={sidebar} />
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
      <Routes>
        <Route path="/" element={<SearchArea sidebar={sidebar} />} />
        <Route path="/:id" element={<CompanyDetails sidebar={sidebar} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
