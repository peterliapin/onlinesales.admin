import { RequestContextType } from "@providers/request-provider";
import { CoreModule, getCoreModuleRoute } from "lib/router";
import { useNavigate } from "react-router-dom";
import { countryListStorageKey } from "./constants";

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

export const getCountryList = async (context: RequestContextType) => {
  const countries = localStorage.getItem(countryListStorageKey);
  if (countries) {
    return JSON.parse(countries) as Record<string, string>;
  } else {
    try {
      const { data } = await context.client.api.countriesList();
      localStorage.setItem(countryListStorageKey, JSON.stringify(data));
      return data;
    } catch (e) {
      return null;
    }
  }
};
