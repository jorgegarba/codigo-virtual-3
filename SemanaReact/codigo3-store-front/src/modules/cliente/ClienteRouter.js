import React from 'react'
import { Switch, Route } from "react-router-dom";
import ClienteCatalogoScreen from './screens/catalogo/ClienteCatalogoScreen';
import ClienteHeader from "./components/ClienteHeader"
import CatalogoState from '../../context/catalogo/catalogoState';

const ClienteRouter = () => {

  return (
    <>
      <CatalogoState >
        <ClienteHeader />
        <Switch>
          <Route path={"/cliente/catalogo"} component={ClienteCatalogoScreen} />
        </Switch>
      </CatalogoState>
    </>
  )
}

export default ClienteRouter
