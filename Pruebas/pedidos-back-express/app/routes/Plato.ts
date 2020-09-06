import { Router } from "express";
import { getPlatoById } from "../controllers/Plato";

export let plato_router = Router();

plato_router.get("/plato/:plato_id", getPlatoById);
