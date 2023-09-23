import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL } from './app/graphql.config';

import { routes } from './app/app-routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<unknown> => ({
        link: ApolloLink.from([httpLink.create({ uri: BASE_URL })]),
        cache: new InMemoryCache()
      }),
      deps: [HttpLink]
    },
    Apollo
  ]
});
