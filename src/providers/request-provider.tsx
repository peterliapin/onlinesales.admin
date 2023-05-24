import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Api, ApiConfig } from "lib/network/swagger-client";
import { useAuthState } from "./auth-provider";

type getTokenFn = () => Promise<string | undefined>;


class ApiExtended<getTokenFn> extends Api<getTokenFn>{
  constructor(apiConfig? : ApiConfig<getTokenFn>){
    super(apiConfig);
    Object.keys(this.api).forEach((key) => {
      const oldFunc = (this.api as unknown as any)[key];
      (this.api as unknown as any)[key] = (...args: any[]) => {
        const response = oldFunc(...args);
        if (response.error){
          throw response.error;
        }
        return response;
      };
    });
  }
  refreshFunc?: () => void;
}


const client = new ApiExtended<getTokenFn>({
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

export type RequestContextType = {
  client: ApiExtended<getTokenFn>;
};

const requestContext = createContext<RequestContextType>({ client });

export const RequestProvider = memo(function RequestProvider({ children }: PropsWithChildren) {
  const { getToken } = useAuthState();
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    client.setSecurityData(getToken);
    setIsReady(true);
  }, [getToken]);

  const value = useMemo(() => ({ client }), []);

  return <requestContext.Provider value={value}>{isReady && children}</requestContext.Provider>;
});

export const useRequestContext = () => useContext(requestContext);
