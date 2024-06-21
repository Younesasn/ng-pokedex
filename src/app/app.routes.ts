import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    // {path: "pokemon/:id", component:DetailComponent, canActivate: [AuthGuard]},
    {path: "pokemon/:id", component:DetailComponent},
    {path: "login", component:LoginComponent},
    // {path: "", component:HomeComponent, canActivate: [AuthGuard]},
    {path: "", component:HomeComponent},
    {path:"**", redirectTo:""}
];
