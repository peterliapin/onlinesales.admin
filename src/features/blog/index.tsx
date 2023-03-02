import {ModuleContainer} from "components/module";
import {ContentList} from "./content-list";
import {Route, Routes} from "react-router-dom";
import {ContentEdit} from "./content-edit";

export const Blog = () => {
  return (
    <ModuleContainer>
      <Routes>
        <Route path={"/"} element={<ContentList/>}/>
        <Route path={"/:id/view"} element={<ContentEdit readonly={true}/>}/>
        <Route path={"/:id/edit"} element={<ContentEdit/>}/>
      </Routes>
    </ModuleContainer>
  );
};
