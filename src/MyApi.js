import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Getmethod from "./pages/Getmethod";
import Postmethod from "./pages/Postmethod";
import Putmethod from "./pages/Putmethod";
import Deletemethod from "./pages/Deletemethod";
import NoPage from "./pages/NoPage";

function MyApi() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="get" element={<Getmethod />} />
          <Route path="post" element={<Postmethod />} />
          <Route path="put" element={<Putmethod />} />
          <Route path="delete" element={<Deletemethod />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyApi;