import React from 'react';
import Employee from './Employee';

export default ({filteredEmployees, employees})=>{
  if(filteredEmployees.length === 0){
  return employees.map(employee => <Employee employee={employee} key={employee.id}/>)
} else {
  return filteredEmployees.map(employee => <Employee employee={employee} key={employee.id}/>)
}}