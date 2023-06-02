import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaoyutPageComponent } from './pages/laoyut-page/laoyut-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

//localhost:3500/auth/login
const routes: Routes = [
  {
    path: '',
    component: LaoyutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'new-account', component: RegisterPageComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AuthRoutingModule { }
