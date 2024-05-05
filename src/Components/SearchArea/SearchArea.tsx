import { useCallback, useEffect, useState } from "react";
import "./searchArea.css";
import MultiSelect from "../SubComponents/Select";
import { TextField } from "@mui/material";
import Card from "../SubComponents/Card/Card";
import {
  experienceOptions,
  minimumBasePaySalaryOptions,
  noOfEmployeesOptions,
  remoteOptions,
  roleOptions,
} from "./selectOptions";

const SearchArea = ({ sidebar }: { sidebar: boolean }) => {
  //filters
  const [roles, setRoles] = useState([]);
  const [noOfEmployees, setNoOfEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [minimumBasePaySalary, setMinimumBasePaySalary] = useState([]);
  const [searchText, setSearchText] = useState("");

  //fetched data
  const [jobsData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  //fetching data
  // const fetchJobs = () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ limit: 12, offset: 0 }),
  //   };
  //   fetch(
  //     "https://api.weekday.technology/adhoc/getSampleJdJSON",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJobData(data.jdList);
  //       setFilteredJobs(data.jdList);
  //       console.log(data);
  //     })
  //     .catch((error) => console.error(error));
  // };
  const fetchJobs = useCallback(() => {
    if (!hasMore) return;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limit: 12, offset }),
    };
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.jdList.length === 0) {
          setHasMore(false);
        } else {
          setJobData((prevJobs) => [...prevJobs, ...data.jdList]);
          setFilteredJobs((prevJobs) => [...prevJobs, ...data.jdList]);
        }
      })
      .catch((error) => console.error(error));
  }, [offset, hasMore]);

  // Initial fetch
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  useEffect(() => {
    const filterData = () => {
      let result = jobsData;

      //According to the Roles
      if (roles.length)
        result = result.filter((job) => roles.includes(job.jobRole));

      if (noOfEmployees.length)
        result = result.filter((job) =>
          noOfEmployees.includes(job.noOfEmployees)
        );

      //According to the Experience
      if (experience.length) {
        result = result.filter((job) =>
          experience.includes(JSON.stringify(job.minExp))
        );
      }

      //According to the Location
      if (jobType.length) {
        if (jobType.includes("remote")) {
          result = result.filter((job) => job.location === "remote");
        }
        if (jobType.includes("hybrid")) {
          result = result.filter((job) => job.location === "hybrid");
        }
      }

      //According to the Salaray
      if (minimumBasePaySalary.length) {
        result = result.filter((job) => {
          const jobMinSalary = Number(job.minJdSalary);
          const jobMaxSalary = Number(job.maxJdSalary);

          return minimumBasePaySalary.some(
            (salaryOption) =>
              jobMinSalary <= Number(salaryOption) &&
              jobMaxSalary >= Number(salaryOption)
          );
        });
      }

      if (searchText)
        result = result.filter((job) =>
          job.companyName.toLowerCase().includes(searchText.toLowerCase())
        );

      setFilteredJobs(result);
    };

    filterData();
  }, [
    roles,
    noOfEmployees,
    experience,
    jobType,
    minimumBasePaySalary,
    searchText,
    jobsData,
  ]);

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setOffset((prevOffset) => prevOffset + 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          label="Experience"
          options={experienceOptions}
          value={experience}
          onChange={(e: any) => {
            setExperience(e.target.value);
          }}
          minWidth="10rem"
        />
        <MultiSelect
          label="Location"
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
        <MultiSelect
          label="Number Of Employees"
          options={noOfEmployeesOptions}
          value={noOfEmployees}
          onChange={(e: any) => {
            setNoOfEmployees(e.target.value);
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
      {filteredJobs.length > 0 ? (
        <div className="jobCards">
          {filteredJobs.map((job) => (
            <Card key={job.jdUid} job={job} />
          ))}
        </div>
      ) : (
        <div className="noJobs">
          <div className="icon">
            <img src="/errorFound.png" alt="" />
          </div>
          <p className="desc">
            No Jobs available for this category at the moment
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchArea;
