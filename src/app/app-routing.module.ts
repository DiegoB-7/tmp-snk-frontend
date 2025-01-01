import { NgModule } from '@angular/core';
import { RouterModule, Routes , PreloadAllModules} from '@angular/router';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { HomeComponent } from './events/pages/home/home.component';
import { EventsComponent } from './events/pages/events/events.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component:SignInComponent
  },
  {
    path: 'app/home',
    component:HomeComponent
  },
  {
    path: 'app/events',
    component:EventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
