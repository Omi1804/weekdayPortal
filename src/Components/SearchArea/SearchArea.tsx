import { useState } from "react";
import "./searchArea.css";
import MultiSelect from "../SubComponents/Select";
import { TextField } from "@mui/material";
import Card from "../SubComponents/Card/Card";

const SearchArea = ({ sidebar }: { sidebar: boolean }) => {
  const [roles, setRoles] = useState([]);
  const [noOfEmployees, setNoOfEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [minimumBasePaySalary, setMinimumBasePaySalary] = useState([]);
  const [searchText, setSearchText] = useState("");

  const roleOptions = [
    { value: "backend", label: "Backend" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Fullstack" },

    { value: "ux", label: "UX Design" },
    { value: "ui", label: "UI Design" },

    { value: "hr", label: "Human Resources" },
    { value: "op", label: "Operations" },
  ];

  const minimumBasePaySalaryOptions = [
    { value: "10k", label: "10K" },
    { value: "20k", label: "20K" },
    { value: "30k", label: "30K" },
    { value: "40k", label: "40K" },
    { value: "50k", label: "50K" },
  ];

  const remoteOptions = [
    { value: "remote", label: "Remote" },
    { value: "hybird", label: "Hybrid" },
    { value: "inOffice", label: "In Office" },
  ];

  const experienceOptions = [
    { value: "1-2", label: "1-2" },
    { value: "2-5", label: "2-5" },
    { value: "5-10", label: "5-10" },
    { value: "10-20", label: "10-20" },
    { value: "20+", label: "20+" },
  ];

  const noOfEmployeesOptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "100+", label: "100+" },
  ];

  return (
    <div className={`searchArea ${sidebar ? "open" : ""}`}>
      <div className="filters">
        <MultiSelect
          label="Job Roles"
          options={roleOptions}
          value={roles}
          onChange={(e: any) => {
            setRoles(e.target.value);
          }}
          minWidth="14rem"
        />
        <MultiSelect
          label="Number Of Employees"
          options={noOfEmployeesOptions}
          value={noOfEmployees}
          onChange={(e: any) => {
            setNoOfEmployees(e.target.value);
          }}
          minWidth="17rem"
        />
        <MultiSelect
          label="Experience"
          options={experienceOptions}
          value={experience}
          onChange={(e: any) => {
            setExperience(e.target.value);
          }}
          minWidth="10rem"
        />
        <MultiSelect
          label="Remote"
          options={remoteOptions}
          value={jobType}
          onChange={(e: any) => {
            setJobType(e.target.value);
          }}
          minWidth="10rem"
        />
        <MultiSelect
          label="Minimum Base Pay Salary"
          options={minimumBasePaySalaryOptions}
          value={minimumBasePaySalary}
          onChange={(e: any) => {
            setMinimumBasePaySalary(e.target.value);
          }}
          minWidth="17rem"
        />
        <TextField
          id="outlined-basic"
          label="Search Company Name"
          variant="outlined"
          value={searchText}
          onChange={(e: any) => {
            setSearchText(e.target.value);
          }}
          size="small"
          sx={{ width: "20rem", bgcolor: "white" }}
        />
      </div>
      <div className="jobCards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SearchArea;
