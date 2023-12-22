import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { TableTarjetaComponent } from '../../components/table-tarjeta/table-tarjeta.component';
import { TableTaskComponent } from '../../components/table-task/table-task.component';
import { CardBalanceComponent } from '../../components/card-balance/card-balance.component';
import { PostCardComponent } from 'src/app/pages/post-card/post-card.component';
import { PostTaskComponent } from 'src/app/pages/post-task/post-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrivateComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    TableTarjetaComponent,
    TableTaskComponent,
    CardBalanceComponent,
    PostCardComponent,
    PostTaskComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PrivateModule { }
