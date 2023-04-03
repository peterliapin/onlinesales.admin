import { ModuleContainer } from "components/module";
import { ContentList } from "./content-list";
import { Route, Routes } from "react-router-dom";
import { ContentEdit } from "./ContentEdit/content-edit";
import { ContentView } from "./content-view";

export const Blog = () => {
  return (
    <ModuleContainer>
      <Routes>
        <Route path={"/"} element={<ContentList />} />
        <Route path={"/view/:id"} element={<ContentView />} />
        <Route path={"/edit/:id"} element={<ContentEdit />} />
        <Route path={"/new"} element={<ContentEdit />} />
      </Routes>
    </ModuleContainer>
  );
};
