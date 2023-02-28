import { addFormRoute, editFormRoute, viewFormRoute } from "lib/router";
import { Outlet, Route, Routes } from "react-router-dom";
import { ContactAdd } from "./add";
import { ContactEdit } from "./edit";
import { ContactsLazy } from "./lazy";
import { ContactView } from "./view";

export const ContactsModule = () => {
  return (
    <>
      <Routes>
        <Route index element={<ContactsLazy />} />
        <Route path={editFormRoute.template} element={<ContactEdit />} />
        <Route path={viewFormRoute.template} element={<ContactView />} />
        <Route path={addFormRoute.template} element={<ContactAdd />} />
      </Routes>
      <Outlet />
    </>
  );
};
