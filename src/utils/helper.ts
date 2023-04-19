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

export const getCountryByCode = async (context: RequestContextType, code: string) => {
  const countries = await getCountryList(context);
  if (countries) {
    const countryList = Object.entries(countries).map(([code, name]) => ({ code, name }));
    return countryList.find((c) => c.code === code)!.name;
  } else {
    return null;
  }
};

export const getFormattedDateTime = (dateToConvert: string) => {
  const date = new Date(dateToConvert);
  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const formattedDateTime = `${formattedDate}  ${formattedTime}`;
  return formattedDateTime;
};
