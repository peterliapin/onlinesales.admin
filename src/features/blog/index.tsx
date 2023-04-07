import { ContentList } from "./content-list";
import { Route, Routes } from "react-router-dom";
import { ContentEdit } from "./ContentEdit/content-edit";
import { ContentView } from "./content-view";
import { ModuleWrapper } from "@components/module-wrapper";

export const BlogModule = () => {
  return (
    <ModuleWrapper>
      <Routes>
        <Route path={"/"} element={<ContentList />} />
        <Route path={"/view/:id"} element={<ContentView />} />
        <Route path={"/edit/:id"} element={<ContentEdit />} />
        <Route path={"/new"} element={<ContentEdit />} />
      </Routes>
    </ModuleWrapper>
  );
};
