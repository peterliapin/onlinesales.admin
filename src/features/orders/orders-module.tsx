import { addFormRoute, editFormRoute, viewFormRoute } from "lib/router";
import { Outlet, Route, Routes } from "react-router-dom";
import { OrderAdd } from "./add";
import { OrderEdit } from "./edit";
import { OrdersLazy } from "./lazy";
import { OrderViewBase } from "./view";

export const OrdersModule = () => {
  return (
    <>
      <Routes>
        <Route index element={<OrdersLazy />} />
        <Route path={editFormRoute.template} element={<OrderEdit />} />
        <Route path={viewFormRoute.template} element={<OrderViewBase />} />
        <Route path={addFormRoute.template} element={<OrderAdd />} />
      </Routes>
      <Outlet />
    </>
  );
};
