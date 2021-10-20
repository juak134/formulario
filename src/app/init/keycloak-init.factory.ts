import { KeycloakService } from "keycloak-angular";
import { environment } from "../../environments/environment";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
            url: environment.keycloakConfig.url,
            realm: environment.keycloakConfig.realm,
            clientId: environment.keycloakConfig.clientId, 
        },
/*         initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
        }, */
        initOptions: {
             onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
        },

      });
}