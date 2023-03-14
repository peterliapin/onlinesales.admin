export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        CORE_API: string;
        CORE_API_SWAGGER: string | undefined;
    }
  }
}