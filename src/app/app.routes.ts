import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CitasComponent } from './pages/citas/citas.component';
import {UserSettingsComponent} from './pages/user-settings/user-settings.component';
import { PsicologosListaComponent } from './pages/lista-psicologos/lista-psicologos.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ajustes',
        component: UserSettingsComponent
    },
    {
        path: 'citas',
        component: CitasComponent
    },
    {
        path: 'profesionales',
        component: PsicologosListaComponent
    },
    {
        path: 'notificaciones',
        component: HomeComponent
    }
    
];

  
  
