/* eslint-disable no-param-reassign */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './components/default-layout/default-layout.module';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { GraphQLModule } from './graphql.module';
import { ChartsModule } from './pages/charts/charts.module';
import { GridsModule } from './pages/grids/grids.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DefaultLayoutModule,
    HeaderModule,
    SidebarModule,
    RouterModule,
    GraphQLModule,
    ChartsModule,
    GridsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
