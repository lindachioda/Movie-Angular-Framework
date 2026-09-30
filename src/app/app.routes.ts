import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login-signup/login/login';
import { authGuard } from './shared/auth-guard/auth-guard';
import { Film } from './film-components/film/film';
import { Popolari } from './film-components/popolari/popolari';
import { TopRated } from './film-components/top-rated/top-rated';
import { Generi } from './film-components/generi/generi';


export const routes: Routes = [
     { path: '', component: Home },
     //{ path: 'users/:id', component: UserProfilo, canActivate:[authGuard] }, => se avessi un router amnche per i dettagli dei profili
     { path: 'users', loadChildren: ()=> import ('./users/users-routes')
          .then(m => m.Usersroutes), //TRASFORMA IN LAZY LOADING 
          canActivate:[authGuard] //auth guard!!!
           },
     { path: 'login', loadComponent: () => import('./login-signup/login/login')
      .then(m => m.Login) },
     { path: 'popolari', loadComponent: () => import('./film-components/popolari/popolari')
      .then(m => m.Popolari), },
     { path: 'top-rated',loadComponent: () => import('./film-components/top-rated/top-rated')
      .then(m => m.TopRated)},
     { path: 'generi', loadComponent: () => import('./film-components/generi/generi')
      .then(m => m.Generi) },
     { path: '**', redirectTo: '' } //WILDCARD reindirizzo alla home tutte le routs non valide!!! 
   
];
