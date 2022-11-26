
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutnew from "./pagesnew/Layoutnew";
import MyCrud from "./MyCrud";
//import MyRedux from "./MyRedux";
//import MyApi from "./MyApi";
import MyContextDemo from "./MyContextDemo";
import DataTable from "./DataTable";
import Form from './Formupdate';
import AboutMe from './AboutMe';
//import { Provider } from "react-redux";
//import reducer from "./store/Reducer";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layoutnew />}>
          <Route path="aboutme" element={<AboutMe />} />
            <Route path="mycrud" element={<MyCrud />} />
            <Route path="mymuiform" element={<Form />} />
             <Route path="mycontext" element={<MyContextDemo />} />
            <Route path="datatable" element={<DataTable />} />

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

