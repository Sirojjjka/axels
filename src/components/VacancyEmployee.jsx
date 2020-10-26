import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

export default (aboutProps) => {
  const [name, setName] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    setName(aboutProps.history.location.aboutProps);
  });

  useEffect(() => {
    Axios.get(
      `http://api.additivasia.io/api/v1/assignment/employees/${name}`
    ).then((response) => {
      setNames(response.data);
    });
  });
  const first = names[0];
  const second = names[1];
  console.log(first);
  console.log(second);
if(names.length>0){
  return (
    <MainContainer>
      <Container>
    <Wrapper>
      <Png><img src="https://hubstaff-production.s3.amazonaws.com/organization/logos/2fb51f59330789bce6e644c1cfb8c152.png" alt=""/></Png>
        <Title><h3> {name}</h3>
       <div> <h5>{first}</h5></div>
        </Title>
    </Wrapper>
    <Second>
      <NavLink to="/"><Button>Go back</Button></NavLink>
      </Second>
      </Container>
    </MainContainer>
  );
} else {return(<Spinner animation="border" role="status">
<span className="sr-only">Loading...</span>
</Spinner>)};}


const MainContainer = styled.div`
position:relative;
`;

const Container = styled.div`
position: absolute;
margin-top: 20%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`;

const Wrapper = styled.div`
position:relative;
width:250px;
height:300px;
margin-top:20px;
border:solid 1px;
border-radius:7%;
box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

const Png = styled.div`
border-radius:55%;
position: absolute;
top:20%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`;


const Title = styled.div`
padding-top:160px;
text-align:center;
align-item:center;
`;

const Second = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:5px;
`;
