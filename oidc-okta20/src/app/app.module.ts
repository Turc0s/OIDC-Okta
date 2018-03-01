
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchService, AuthGuard, OktaAuthWrapper  } from './shared';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [SearchService, OktaAuthWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}
