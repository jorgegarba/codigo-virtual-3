import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "../modules/admin/screens/AdminDashboard";
import AdminCategorias from "../modules/admin/screens/AdminCategorias";
import AdminMesas from "../modules/admin/screens/AdminMesas";
import AdminPedidos from "../modules/admin/screens/AdminPedidos";
import AdminPlatos from "../modules/admin/screens/AdminPlatos";
import AdminHeader from "../modules/admin/components/AdminHeader";
import AdminPedidosDetalle from "../modules/admin/screens/AdminPedidosDetalle";
import "bootstrap/dist/css/bootstrap.min.css";
const RouterAdmin = () => {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <Switch>
          <Route path={"/admin/dashboard"} component={AdminDashboard} />
          <Route path={"/admin/categorias"} component={AdminCategorias} />
          <Route path={"/admin/mesas"} component={AdminMesas} />
          <Route
            path={"/admin/pedidos/:pedido_id"}
            component={AdminPedidosDetalle}
          />
          <Route path={"/admin/pedidos"} component={AdminPedidos} />
          <Route path={"/admin/platos"} component={AdminPlatos} />
          <Redirect to={"/admin/dashboard"} />
        </Switch>
      </main>
    </>
  );
};

export default RouterAdmin;
