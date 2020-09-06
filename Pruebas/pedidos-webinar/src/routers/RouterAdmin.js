import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminScreen from "../modules/admin/screens/AdminScreen";
import AdminHeader from "../modules/admin/components/AdminHeader";
import AdminNavigation from "../modules/admin/components/AdminNavigation";
import AdminCategorias from "../modules/admin/screens/AdminCategorias";
import "./../styles/admin.scss";
const RouterAdmin = () => {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <AdminNavigation />

        <Switch>
          <Route path="/admin/categorias" component={AdminCategorias} />
          <Route path="/admin" component={AdminScreen} />
        </Switch>
      </main>
    </>
  );
};

export default RouterAdmin;
