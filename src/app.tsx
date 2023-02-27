import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "providers/theme-provider";
import { AppHeader } from "components/app-header";
import { Sidebar } from "components/sidebar";
import { AppLayoutContainer, MainContentContainer } from "components/layout";
import { coreModuleRoute, idRoute, rootRoute, subModuleRoute } from "./lib/router";
import { ModuleLoader } from "./features/module-loader";
import { RequestProvider } from "./providers/request-provider";
import { AuthProvider } from "./providers/auth-provider";
import { Contacts } from "features/contacts";
import { ContactEdit } from "features/contacts/edit";
import { ContactAdd } from "features/contacts/add";
import { ContactsLazy } from "features/contacts/lazy";

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RequestProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path={rootRoute}
                element={
                  <AppLayoutContainer>
                    <AppHeader />
                    <Sidebar />
                    <MainContentContainer>
                      <Outlet />
                    </MainContentContainer>
                  </AppLayoutContainer>
                }
              >
                <Route index element="Index page" />
                <Route path={coreModuleRoute.template} element={<Outlet />}>
                  <Route index element={<ModuleLoader />} />
                  <Route path={subModuleRoute.template} element={<ModuleLoader />} />
                  <Route
                    path={idRoute.template + subModuleRoute.template}
                    element={<ModuleLoader />}
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </RequestProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
