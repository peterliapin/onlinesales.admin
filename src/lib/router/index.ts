import { Parser, route, intParser } from "typesafe-routes";

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

export const editRoute = route(
  "/:id/edit",
  {
    id: intParser,
  },
  {}
);

export const addRoute = route("/add", {}, {});

export const editModuleRoute = route(
  "/:editModuleName",
  {
    editModuleName: coreModuleParser,
  },
  { editRoute }
);

export const addModuleRoute = route(
  "/:addModuleName",
  {
    addModuleName: coreModuleParser,
  },
  { addRoute }
);

export const getCoreModuleRoute = (moduleName: CoreModule) => coreModuleRoute({ moduleName }).$;

export const getEditModuleRoute = (editModuleName: CoreModule, id: number) =>
  editModuleRoute({ editModuleName: editModuleName }).editRoute({ id: id }).$;

export const getAddModuleRoute = (addModuleName: CoreModule) =>
  addModuleRoute({ addModuleName: addModuleName }).addRoute({}).$;

export const rootRoute = "/";
