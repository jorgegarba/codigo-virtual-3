import { Request, Response } from "express";
import { Plato } from "../config/sequelize";

export const getPlatoById = (req: Request, res: Response) => {
  Plato.findByPk(req.params.plato_id).then((objPlato: any) => {
    res.status(200).json({
      ok: true,
      content: objPlato,
    });
  });
};
