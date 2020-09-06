import { Request, Response } from "express";
import { Categoria, Plato } from "../config/sequelize";
const excluir = ["createdAt", "updatedAt"];

export const getCategorias = (req: Request, res: Response) => {
  Categoria.findAll({
    attributes: {
      exclude: excluir,
    },
  }).then((usuarios: any) => {
    if (usuarios) {
      res.status(201).json({
        ok: true,
        content: usuarios,
      });
    }
  });
};
export const getPlatosByCategoriaId = (req: Request, res: Response) => {
  Categoria.findByPk(req.params.categoria_id, {
    include: [{ model: Plato, attributes: { exclude: excluir } }],
    attributes: {
      exclude: excluir,
    },
  }).then((usuarios: any) => {
    if (usuarios) {
      res.status(201).json({
        ok: true,
        content: usuarios,
      });
    }
  });
};
