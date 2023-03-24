import { createContext, memo, PropsWithChildren, useContext, useEffect, useMemo } from "react";
import { Api } from "lib/network/swagger-client";
import { useAuthState } from "./auth-provider";

type getTokenFn = () => Promise<string | undefined>;

const client = new Api<getTokenFn>({
  baseUrl: process.env.CORE_API,
  securityWorker: async (getToken) => {
    const token = await getToken?.();
    if (token) {
      return {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    }
  },
  baseApiParams: {
    secure: true,
  },
});

type RequestContextType = {
  client: Api<getTokenFn>;
};

const requestContext = createContext<RequestContextType>({ client });

export const RequestProvider = memo(function RequestProvider({ children }: PropsWithChildren) {
  const { getToken } = useAuthState();

  useEffect(() => {
    client.setSecurityData(getToken);
  }, [getToken]);

  const value = useMemo(() => ({ client }), []);

  return <requestContext.Provider value={value}>{children}</requestContext.Provider>;
});

export const useRequestContext = () => useContext(requestContext);
