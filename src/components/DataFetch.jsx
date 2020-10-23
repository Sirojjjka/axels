import Axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Employees from "./Employees";

let DataFetch = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    Axios.get(`http://api.additivasia.io/api/v1/assignment/employees`).then(
      (response) => {
        setEmployees(response.data);
      }
    );
  });

  let FilterFunction = () => {
    setFilteredEmployees(
      employees.filter((employee) => {
        return employee.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return (
    <Container pt-3>
      <div className="row">
        <div className="col">
          <h2>List of employees</h2>
          <Employees
            filteredEmployees={filteredEmployees}
            employees={employees}
          />
        </div>
        <div className="col  ">
          <h4>Search by name</h4>
          <div className="form-group">
            <Input
              type="text"
              className="form-control"
              id="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              onClick={() => {
                FilterFunction(search);
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Input = styled.input`
  width: 200px;
  margin-bottom:20px;
`;

export default DataFetch;
