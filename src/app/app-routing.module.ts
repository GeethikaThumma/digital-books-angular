import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { BuybookComponent } from './buybook/buybook.component';
import { RefundComponent } from './refund/refund.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
const routes: Routes = [
{ path: 'User', component:UserComponent},
{ path:'createbook', component: CreateBookComponent},
{ path:'login', component: LoginComponent},
{ path:'register', component: RegisterComponent},
{ path:'welcome', component: WelcomeComponent},
{ path:'getBooks', component: GetBooksComponent},
{ path:'buybooks', component: BuybookComponent},
{ path:'refund', component: RefundComponent},
{ path:'authenticate', component: AuthenticateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
