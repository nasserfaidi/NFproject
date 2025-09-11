import {  Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Internships } from './internships/internships';
import { Applications } from './applications/applications';


export const routes: Routes = [
    {path: 'employees', component: Employees} ,
    {path: 'internships', component: Internships} ,
    {path: 'applications', component: Applications} 
];