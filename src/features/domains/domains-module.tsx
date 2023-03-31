import { addFormRoute, editFormRoute, viewFormRoute } from "lib/router";
import { Outlet, Route, Routes } from "react-router-dom";
import { DomainAdd } from "./add";
import { DomainEdit } from "./edit";
import { DomainsLazy } from "./lazy";
import { DomainViewBase } from "./view";

export const DomainsModule = () => {
  return (
    <>
      <Routes>
        <Route index element={<DomainsLazy />} />
        <Route path={editFormRoute.template} element={<DomainEdit />} />
        <Route path={viewFormRoute.template} element={<DomainViewBase />} />
        <Route path={addFormRoute.template} element={<DomainAdd />} />
      </Routes>
      <Outlet />
    </>
  );
};
