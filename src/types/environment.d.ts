export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        CORE_API: string;
        MSAL_CLIENT_ID: string;
        MSAL_AUTHORITY: string;
        CORE_API_SWAGGER: string | undefined;
    }
  }
}