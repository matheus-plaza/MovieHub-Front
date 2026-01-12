import { Routes } from '@angular/router';
import { SignInPage } from './pages/not-logged/sing-in/sign-in';
import { SignUpPage } from './pages/not-logged/sing-up/sign-up';
import { Home } from './pages/logged/home/home';
import { CreateMovie } from './pages/logged/create-movie/create-movie';

export const routes: Routes = [
  { path: 'login', component: SignInPage },
  { path: 'cadastre-se', component: SignUpPage },
  { path: 'home', component: Home},
  {path: 'novo-filme', component: CreateMovie}
];
