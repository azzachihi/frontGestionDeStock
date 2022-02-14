import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
 { path: "", pathMatch: "full", redirectTo: "app-navbar" },
 { path: "listProvider", component: ListProviderComponent , canActivate:[AuthGaurdService]},
 { path: "addProvider", component: AddProviderComponent , canActivate:[AuthGaurdService]},
 { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate:[AuthGaurdService] },
 { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate:[AuthGaurdService] },
 { path: 'login', component: LoginComponent },
 { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
 { path: 'registration', component: RegistrationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
