import { UserEdit } from "./UserEdit";
import { Route, Routes } from "react-router-dom";
import { UserList } from "./UserList";

export const UserModule = () => {
  return (
    <Routes>
      <Route path={"/"} element={<UserList />} />
      <Route path={"/:id/edit"} element={<UserEdit />} />
      <Route path={"/:id/view"} element={<UserEdit />} />
      <Route path={"/add"} element={<UserEdit />} />
    </Routes>
  );
};
