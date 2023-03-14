import { memo, PropsWithChildren, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { User } from "lib/network/swagger-client";
import { useRequestContext } from "./request-provider";

const apiLink = process.env.CORE_API;
export const useAuthState = () => {
  const [ cookies ] = useCookies([".Authorized"]);
  const [ profile, setProfile ] = useState<User>();
  const [ error , setError] = useState<unknown>(null);
  const { client } = useRequestContext();
  useEffect(() => {
    const loadProfileInfo = async () => {
      try {
        const { data } = await client.api.authProfileList();
        setProfile(data);
      } catch (error) {
        setError(error);
      }
    };

    loadProfileInfo();
  }, []);

  return { isAuthorized: (cookies[".Authorized"] === "true" && error === null), profile };
};

export const AuthProvider = memo(function AuthProvider({ children }: PropsWithChildren) {
  const origin = window.location.origin;
  const [ cookies, setCookies ] = useCookies([".Authorized"]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (cookies[".Authorized"]){
      return;
    }
    if (queryParams.get("loggedIn") === "true"){
      setCookies(".Authorized", "true");
      window.location.replace(window.location.origin + window.location.pathname);
    }
    window.location.replace(`${apiLink}/api/auth/login?redirectUrl=${origin}?loggedIn=true`);
  }, []);
  return (
    <div>
      {children}
    </div>
  );
});