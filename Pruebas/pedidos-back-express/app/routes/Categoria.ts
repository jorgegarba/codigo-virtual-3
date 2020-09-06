import { Router } from "express";
import { getCategorias,getPlatosByCategoriaId } from "../controllers/Categoria";

export let categoria_router = Router();

categoria_router.get("/categoria", getCategorias);
categoria_router.get("/categoria/:categoria_id/platos", getPlatosByCategoriaId);
