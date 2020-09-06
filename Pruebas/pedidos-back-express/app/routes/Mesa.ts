import {
  getMesas,
  postMesa,
  putMesa,
  deleteMesa,
  getMesaById,
} from "./../controllers/Mesa";
import { Router } from "express";

export let mesa_router = Router();

mesa_router.get("/mesa", getMesas);
mesa_router.get("/mesa/:mesa_id", getMesaById);
mesa_router.post("/mesa", postMesa);
mesa_router.put("/mesa/:mesa_id", putMesa);
mesa_router.delete("/mesa/:mesa_id", deleteMesa);
