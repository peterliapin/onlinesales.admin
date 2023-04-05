import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "providers/theme-provider";
import {AppHeader} from "components/app-header";
import {Sidebar} from "components/sidebar";
import {AppLayoutContainer, MainContentContainer} from "components/layout";
import {coreModuleRoute, rootRoute} from "@lib/router";
import {ModuleLoader} from "@features/module-loader";
import {RequestProvider} from "@providers/request-provider";
import {AuthProvider} from "@providers/auth-provider";
import {LoggerProvider} from "@providers/logger-provider";

export const App = () => {
  return (
    <LoggerProvider>
      <ThemeProvider>
        <AuthProvider>
          <RequestProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path={rootRoute}
                  element={
                    <AppLayoutContainer>
                      <AppHeader/>
                      <Sidebar/>
                      <MainContentContainer>
                        <Outlet/>
                      </MainContentContainer>
                    </AppLayoutContainer>
                  }
                >
                  <Route index element="Index page"/>
                  <Route path={`${coreModuleRoute.template}/*`} element={<ModuleLoader/>}/>
                </Route>
              </Routes>
            </BrowserRouter>
          </RequestProvider>
        </AuthProvider>
      </ThemeProvider>
    </LoggerProvider>
  );
};
