import { memo, PropsWithChildren, useEffect, createContext, useState, useContext } from "react";
import { useRequestContext } from "./request-provider";
import { useAuthState } from "./auth-provider";
import { UserDetailsDto } from "@lib/network/swagger-client";
import { useNotificationsService } from "@hooks";

const UserContext = createContext<UserDetailsDto | null>(null);

export const UserProvider = memo(function UserProvider({ children }: PropsWithChildren) {
  const requestContext = useRequestContext();
  const authState = useAuthState();
  const { notificationsService } = useNotificationsService();
  const [currentUser, setCurrentUser] = useState<UserDetailsDto | null>(null);
  useEffect(() => {
    const infoRetrieve = async () => {
      const resp = await requestContext.client.api.usersMeList();
      if (resp.error){
        notificationsService.error("Unable to retrieve user info data");
        setCurrentUser(null);
        return;
      }
      setCurrentUser(resp.data);
    };
    infoRetrieve();
  }, [authState.account]);
  return (
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  );
});


export const useUserInfo = () => {
  const ctx = useContext(UserContext);
  return ctx;
};