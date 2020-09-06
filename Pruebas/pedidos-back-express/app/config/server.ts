import { mesa_router } from "./../routes/Mesa";
import { conexion } from "./sequelize";
import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import { usuario_router } from "../routes/Usuario";

import http from "http";
import socketIO from "socket.io";

import swaggerUi from "swagger-ui-express";
import json from "./../docs/apidocs.json";
import { pedido_router } from "../routes/Pedido";
import { categoria_router } from "../routes/Categoria";
import { plato_router } from "../routes/Plato";
import { emitirReporte } from "../controllers/Socket";

export class Server {
  public app: express.Application;
  public httpServer: http.Server;
  public io: socketIO.Server;
  public PUERTO = process.env.PORT || 5000;
  // public numero = 7;
  constructor() {
    this.app = express();
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.habilitarCORS();
    this.configurarBodyParser();
    this.configurarRutas();
    this.escucharSockets();

    if (typeof Server.instance === "object") {
      console.log("ya habia");

      return Server.instance;
    }
    console.log("no habia");

    Server.instance = this;
    return this;
  }
  escucharSockets() {
    console.log("Escuchando Sockets");
    // Evento 'connect'
    // Es un evento que se dispara automáticamente cuando un cliente
    // se conecta al servidor SOCKET(io)
    this.io.on("connect", (cliente: socketIO.Socket) => {
      console.log("Se conectó " + cliente.id);

      cliente.on("disconnect", () => {
        console.log("Se desconectó " + cliente.id);
      });

      cliente.on("peticion-reporte-dashboard", () => {
        emitirReporte();
      });

      // cliente.on("pedir-productos", () => {
      //   this.io.emit("lista-productos", objProductos.productos);
      // });

      // cliente.on("agregar-producto", (objProducto: Producto) => {
      //   objProductos.agregarProducto(objProducto);
      //   this.io.emit("lista-productos", objProductos.productos);
      // });
    });
  }

  habilitarCORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });
  }
  configurarBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  configurarRutas() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        ok: true,
        message: "El servidor está activo!",
      });
    });

    this.app.use("", usuario_router);
    this.app.use("", mesa_router);
    this.app.use("", pedido_router);
    this.app.use("", categoria_router);
    this.app.use("", plato_router);
    this.app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(json));
  }
  start() {
    this.httpServer.listen(this.PUERTO, () => {
      console.log(
        "Servidor corriendo perfectamente en el puerto " + this.PUERTO
      );
      // sync() => función que sincroniza/crea todos los modelos
      // en la base de datos
      // {force:true} => CUIDADO!, éste comando borrará todas las tablas
      // de la base de datos y las creará nuevamente.
      // {force:false} => Éste comando no borra las tablas PERO TAMPOCO
      // agrega campos adicionales si ya han sido previamente creados
      // en un modelo.
      conexion
        .sync({ force: false, alter: true })
        .then(() => {
          console.log("== BD creada con Exito ==");
        })
        .catch((error: any) => {
          console.log("== ERROR al crear la BD");
          console.log(error);
        });
    });
  }
}
