import {memo, PropsWithChildren, useCallback} from "react";
import {PublicClientApplication, Configuration, InteractionType} from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  MsalProvider,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.MSAL_CLIENT_ID ?? "",
    redirectUri: location.origin,
    authority: process.env.MSAL_AUTHORITY,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const AuthProvider = memo(function AuthProvider({children}: PropsWithChildren) {
  return (
    <MsalProvider instance={msalInstance}>
      <RedirectLogin/>
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
    </MsalProvider>
  );
});

const RedirectLogin = () => {
  useMsalAuthentication(InteractionType.Redirect);

  return null;
};

export const useAuthState = () => {
  const {instance, accounts} = useMsal();

  const account = accounts.at(0);

  const getToken = useCallback(async () => {
    try {
      const {idToken} = await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account
      });

      return idToken;
    } catch {
      await instance.loginRedirect();
    }
  }, [instance, account]);

  const logout = useCallback(async () => {
    if (instance && account) {
      await instance.logout();
    }
  }, [instance, account])

  return {account, getToken, logout};
};
