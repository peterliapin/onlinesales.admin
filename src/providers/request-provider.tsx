import { createContext, memo, PropsWithChildren, useContext, useEffect, useMemo } from "react";
import { Api } from "lib/network/swagger-client";

const client = new Api<string>({
  baseUrl: process.env.CORE_API,
  securityWorker: async () => {
    return {
      credentials: "include",
    };
  },
  baseApiParams: {
    secure: true,
  },
});

type RequestContextType = {
  client: Api<string>;
};

const requestContext = createContext<RequestContextType>({ client });

export const RequestProvider = memo(function RequestProvider({ children }: PropsWithChildren) {

  useEffect(() => {
    client.setSecurityData("");
  }, []);

  const value = useMemo(() => ({ client }), []);

  return <requestContext.Provider value={value}>{children}</requestContext.Provider>;
});

export const useRequestContext = () => useContext(requestContext);
