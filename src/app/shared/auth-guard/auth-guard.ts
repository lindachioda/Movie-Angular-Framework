import { CanActivateFn, Routes } from '@angular/router';
import { AuthService } from '../auth-service/auth-service';
import { inject, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { LogSignService } from '../../servicies/log-sign-service';


export const authGuard: CanActivateFn = () => { 
  //canactivate è per avere il permesso di entrare in una rotta

  let logSignService = inject(LogSignService)// costruttore del service log/sign

  return logSignService.getIsLogin()|| localStorage.getItem("user") !== null
}
