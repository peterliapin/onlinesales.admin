import { Parser, route, intParser, stringParser } from "typesafe-routes";

export const enum CoreModule {
  contacts = "contacts",
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

export const subModuleRoute = route(
  ":subModuleName",
  {
    subModuleName: stringParser,
  },
  {}
);

export const idRoute = route(
  ":id/",
  {
    id: intParser,
  },
  { subModuleRoute }
);

export const getCoreModuleRoute = (moduleName: CoreModule) => coreModuleRoute({ moduleName }).$;

export const getEditModuleRoute = (id: number) =>
  idRoute({ id: id }).subModuleRoute({ subModuleName: "edit" }).$;

export const getViewModuleRoute = (id: number) =>
  idRoute({ id: id }).subModuleRoute({ subModuleName: "view" }).$;

export const getAddModuleRoute = () => subModuleRoute({ subModuleName: "add" }).$;

export const rootRoute = "/";
