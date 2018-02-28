import { Component } from '@angular/core';
// import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master';

  // constructor(private oauthService: OAuthService) {
  //   this.oauthService.redirectUri = window.location.origin;
  //   this.oauthService.clientId = '{client-id}';
  //   this.oauthService.scope = 'openid profile email';
  //   this.oauthService.issuer = 'https://dev-501594.oktapreview.com/oauth2/default';
  //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();

  //   // Load Discovery Document and then try to login the user
  //   this.oauthService.loadDiscoveryDocument().then(() => {
  //     this.oauthService.tryLogin();
  //   });
  // }

}
