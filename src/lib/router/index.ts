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

export const editFormRoute = route(
  ":id/edit",
  {
    id: intParser,
  },
  {}
);

export const viewFormRoute = route(
  ":id/view",
  {
    id: intParser,
  },
  {}
);

export const addFormRoute = route("add", {}, {});

export const contactDetailsRoute = route("details", {}, {});

export const contactInvoicesRoute = route("invoices", {}, {});

export const contactLogsRoute = route("logs", {}, {});

export const getCoreModuleRoute = (moduleName: CoreModule) => coreModuleRoute({ moduleName }).$;

export const getEditFormRoute = (id: number) => editFormRoute({ id: id }).$;

export const getViewFormRoute = (id: number) => viewFormRoute({ id: id }).$;

export const getAddFormRoute = () => addFormRoute({}).$;

export const rootRoute = "/";
