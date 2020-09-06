import { getMesas, postMesa, putMesa, deleteMesa } from "./../controllers/Mesa";
import { Router } from "express";
import { getPedidos, postPedido, getPedidoById } from "../controllers/Pedido";

export let pedido_router = Router();

pedido_router.get("/pedido", getPedidos);
pedido_router.post("/pedido", postPedido);
pedido_router.get("/pedido/:pedido_id", getPedidoById);
