import { Router, Response, Request } from "express";
import {
  RegistrarUsuario,
  Login,
  getUsuarios,
  VerificarToken,
} from "../controllers/Usuario";
import { wachiman } from "../utils/utils";

export let usuario_router = Router();

usuario_router.post("/registro", RegistrarUsuario);
usuario_router.post("/login", Login);
usuario_router.get("/usuario", getUsuarios);
usuario_router.post("/verificar", wachiman, (req: Request, res: Response) =>
  res.status(200).json({ ok: true, content: "token valido" })
);
