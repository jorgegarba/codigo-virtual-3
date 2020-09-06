import { Mesa } from "./../config/sequelize";
import { Request } from "express";
import { Response } from "express";
import { Server } from "../config/server";
import { emitirReporte } from "./Socket";

const excluir = ["createdAt", "updatedAt"];

export const getMesas = async (req: Request, res: Response) => {
  const mesas = await Mesa.findAll({ attributes: { exclude: excluir } });
  if (mesas) {
    res.status(200).json({
      ok: true,
      content: mesas,
    });
  }
};

export const getMesaById = async (req: Request, res: Response) => {
  const mesa = await Mesa.findByPk(req.params.mesa_id);
  if (mesa) {
    res.status(200).json({
      ok: true,
      content: mesa,
    });
  } else {
    res.status(404).json({
      ok: false,
      content: "no encontrado",
    });
  }
};

export const postMesa = async (req: Request, res: Response) => {
  const objMesa = Mesa.build(req.body);
  const objMesaCreada = await objMesa.save();
  res.status(201).json({
    ok: true,
    content: objMesaCreada,
  });
  const objServer = new Server();

  Mesa.findAll().then((mesas) => {
    console.log("emitiendo lista de mesas");
    objServer.io.emit("mesas-lista", JSON.stringify(mesas));
  });
  emitirReporte();
};

export const putMesa = async (req: Request, res: Response) => {
  let objMesa = await Mesa.update(
    { ...req.body },
    { where: { mesa_id: req.params.mesa_id } }
  );
  res.status(200).json({
    ok: objMesa[0] === 1,
    content: objMesa,
  });
};

export const deleteMesa = async (req: Request, res: Response) => {
  let objMesa = await Mesa.destroy({ where: { mesa_id: req.params.mesa_id } });
  res.status(200).json({
    ok: objMesa === 1,
    content: objMesa,
  });
};
