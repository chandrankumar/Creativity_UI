import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ModelComponent } from './model/model.component';


const routes: Routes = [
{path: 'login', component:LoginComponent},
{path: 'profile', component:ProfileComponent},
{path: 'model', component:ModelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
