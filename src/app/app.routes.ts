import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DescriptionComponent } from './description/description.component';
import { NotFoundComponent } from './not-found/not-found.component';
 

export const routes: Routes = [
    {path: "home" , component: HomeComponent},
    {path: "calculator" , component: CalculatorComponent},
    {path: "description" , component: DescriptionComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
];

