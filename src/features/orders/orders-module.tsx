import { addFormRoute, editFormRoute, orderDetailsRoute, viewFormRoute } from "lib/router";
import { Outlet, Route, Routes } from "react-router-dom";
import { OrderAdd } from "./add";
import { OrderEdit } from "./edit";
import { OrdersLazy } from "./lazy";
import { OrderViewBase } from "./view";
import { OrderView } from "./view/details";

export const OrdersModule = () => {
  return (
    <>
      <Routes>
        <Route index element={<OrdersLazy />} />
        <Route path={editFormRoute.template} element={<OrderEdit />} />
        <Route path={viewFormRoute.template} element={<OrderViewBase />}>
          <Route index element={<OrderView />} />
          <Route path={orderDetailsRoute.template} element={<OrderView />} />
        </Route>
        <Route path={addFormRoute.template} element={<OrderAdd />} />
      </Routes>
      <Outlet />
    </>
  );
};
