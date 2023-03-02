import { Parser, route } from "typesafe-routes";

export const enum CoreModule {
  contacts = "contacts",
  blog = "blog",
}

const coreModuleParser: Parser<CoreModule> = {
  parse: (value) => value as CoreModule,
  serialize: (moduleName) => moduleName,
};

export const coreModuleRoute = route(
  "/:moduleName",
  {
    moduleName: coreModuleParser,
  },
  {}
);

export const getCoreModuleRoute = (moduleName: CoreModule) => coreModuleRoute({ moduleName }).$;

export const rootRoute = "/";
