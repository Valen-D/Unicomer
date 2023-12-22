import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authAcessPrivate, authAcessPublic } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    canActivate: [authAcessPublic],
    loadChildren: () => import('./shared/layouts/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '', 
    canActivate: [authAcessPrivate],
    loadChildren: () => import('./shared/layouts/private/private.module').then(m => m.PrivateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
