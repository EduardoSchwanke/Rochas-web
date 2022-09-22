import { Home } from "./pages/Home"
import { Post } from "./pages/Post"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { DashboardPost } from "./pages/DashboardPost";
import { Sedimentos } from "./pages/Sedimentos";

import { Ignea } from "./pages/Ignea";
import { Metaforfica } from "./pages/Metaforfica";
import { Switch } from "@headlessui/react";


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createpost" element={
          //!login ? <h1>error</h1> : <DashboardPost />
          <DashboardPost/>
        }></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/sedimentos" element={<Sedimentos />}></Route>
        <Route path="/ignea" element={<Ignea />}></Route>
        <Route path="/metaforfica" element={<Metaforfica />}></Route>
      </Routes>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sedimentos">
            <Redirect to="/sedimentos" />
          </Route>
        </Switch>
    </BrowserRouter>

  )
}
 
//https://didatico.igc.usp.br/rochas/sedimentares/