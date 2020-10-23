import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import DataFetch from './components/DataFetch'
import VacancyEmployee from './components/VacancyEmployee';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
<Route path = '/' exact component={DataFetch}/>
<Route path = '/VacancyEmloyee' component = {VacancyEmployee}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
