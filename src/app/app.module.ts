/* eslint-disable no-param-reassign */

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

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

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    DefaultLayoutModule,
    HeaderModule,
    SidebarModule,
    RouterModule,
    GraphQLModule,
    ChartsModule,
    GridsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
