import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default ({ employee }) => {
  let GetName = (employee) => {
    return (
      <div>
        <h1>{employee}</h1>
      </div>
    );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <NavLink 
            to={{pathname:"/VacancyEmloyee",
            aboutProps:employee}}>
            {employee}
          </NavLink>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
