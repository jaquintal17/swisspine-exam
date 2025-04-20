import { Routes } from '@angular/router';
import { ExternalSystemComponent } from './components/external-system/external-system.component';
import { PlannerComponent } from './components/planner/planner.component';

export const routes: Routes = [
    { path: '', redirectTo: 'external-systems', pathMatch: 'full' },
    { path: 'planners', component : PlannerComponent},
    { path: 'external-systems', component: ExternalSystemComponent },
];

