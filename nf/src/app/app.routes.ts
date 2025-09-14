import {  Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Internships } from './internships/internships';
import { Departments } from '../departments/applications


export const routes: Routes = [
    {path: 'employees', component: Employees} ,
    {path: 'internships', component: Internships} ,
    {path: 'departments', component: Departments} 
];