import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/content/dashboard/dashboard.component";
import { FlightListComponent } from "src/app/content/dashboard/flight-list/flight-list.component";



export const routes:Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'searchList', component: FlightListComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path :'**', component: DashboardComponent }

];
