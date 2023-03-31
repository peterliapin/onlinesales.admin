import { CoreModule, getCoreModuleRoute } from "lib/router";
import { useNavigate } from "react-router-dom";

export const useCoreModuleNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (endRoute: string) => {
    const toRoute = getCoreModuleRoute(endRoute as CoreModule);
    if (location.pathname === toRoute) {
      window.location.reload();
    } else {
      navigate(toRoute);
    }
  };

  return handleNavigation;
};
