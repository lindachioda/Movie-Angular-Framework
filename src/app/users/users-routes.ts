import { Routes } from '@angular/router';
import { Users } from './users'

export const Usersroutes: Routes = [ //LAZY LOADING
    {path: '', component: Users}
]