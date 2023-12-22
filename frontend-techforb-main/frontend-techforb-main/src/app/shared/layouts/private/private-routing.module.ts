import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PostTaskComponent } from 'src/app/pages/post-task/post-task.component';
import { PostCardComponent } from 'src/app/pages/post-card/post-card.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'registrar-tarjeta', component: PostCardComponent },
      { path: 'registrar-transacion', component: PostTaskComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
