import { UserEdit } from "./user-edit";
import { Route, Routes } from "react-router-dom";
import { UserList } from "./user-list";

export const UserModule = () => {
  return (
    <Routes>
      <Route path={"/"} element={<UserList />} />
      <Route path={"/:id/edit"} element={<UserEdit />} />
      <Route path={"/:id/view"} element={<UserEdit readonly />} />
      <Route path={"/add"} element={<UserEdit />} />
    </Routes>
  );
};
