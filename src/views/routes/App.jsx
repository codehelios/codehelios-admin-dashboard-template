import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import { SideNav, AppBar } from "views/components";

// Create new bundle file for Home
const Home = loadable(() => import("views/pages/Home"));

const App = (props) => {
  return (
    <BrowserRouter>
      <SideNav AppBar={AppBar} drawerWidth="240px" listItemWidth="216px">
        <Switch>
          <Route path="/" component={Home} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </SideNav>
    </BrowserRouter>
  );
};

export default App;
