import { Route, Routes } from "react-router-dom";
import { ActivityLogList } from "./list";

export const ActivityLogModule = () => {
  return (
    <Routes>
      <Route path={"/"} element={<ActivityLogList />} />
    </Routes>
  );
};
