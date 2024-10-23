import './bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client';
import EmployeeList from './components/employees/EmployeeList';
import EmployeeDetails from './components/employees/EmployeeDetails';
import EmployeeForm from './components/employees/EmployeeForm';
import RequestList from './components/requests/RequestList';
import TrainingList from './components/trainings/TrainingList';
// Montre le composant EmployeeList
if (document.getElementById('employee-list')) {
  const root = createRoot(document.getElementById('employee-list'));
  root.render(<EmployeeList />);

}


// Montre le composant RequestList dans la div 'request-list'
if (document.getElementById('request-list')) {
  const root = createRoot(document.getElementById('request-list'));
  root.render(<RequestList />);
}

// Montre le composant TrainingList dans la div 'training-list'
if (document.getElementById('training-list')) {
  const root = createRoot(document.getElementById('training-list'));
  root.render(<TrainingList />);
}


