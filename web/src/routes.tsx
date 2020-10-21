import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from "./pages/CreateOrphanage";
import Landing from "./pages/Landing";
import Orphanage from "./pages/Orphanage";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/app" component={OrphanagesMap} />
        <Route exact path="/orphanages/create" component={CreateOrphanage} />
        <Route exact path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
