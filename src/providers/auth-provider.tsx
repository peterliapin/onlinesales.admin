import { memo, PropsWithChildren, useCallback } from "react";
import {
  PublicClientApplication,
  Configuration,
  InteractionStatus,
  InteractionType,
} from "@azure/msal-browser";
import { MsalProvider, useMsal, MsalAuthenticationTemplate } from "@azure/msal-react";

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.MSAL_CLIENT_ID ?? "",
    redirectUri: location.origin,
    authority: process.env.MSAL_AUTHORITY,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const Loading = () => {
  return <div>Authentication in progress...</div>; // TODO: Design better one
};

export const AuthProvider = memo(function AuthProvider({ children }: PropsWithChildren) {
  return (
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={{
          scopes: ["User.Read"],
        }}
        loadingComponent={Loading}
      >
        {children}
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
});

export const useAuthState = () => {
  const { instance, accounts } = useMsal();

  const account = accounts.at(0);

  const getToken = useCallback(async () => {
    try {
      const { idToken } = await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account,
        forceRefresh: true,
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
  }, [instance, account]);

  const reLogin = useCallback(async () => {
    if (instance && account) {
      await instance.loginRedirect();
    }
  }, [instance, account]);

  return { account, getToken, logout, reLogin };
};
