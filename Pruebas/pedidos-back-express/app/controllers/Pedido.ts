import {
  Pedido,
  Mesa,
  Usuario,
  PedidoPlato,
  Plato,
  conexion,
} from "./../config/sequelize";
import { Request } from "express";
import { Response } from "express";
import { emitirReporte } from "./Socket";

const excluir = ["createdAt", "updatedAt"];

export const getPedidos = async (req: Request, res: Response) => {
  const pedidos = await Pedido.findAll({
    attributes: { exclude: excluir },
    include: [
      { model: Mesa, attributes: { exclude: excluir } },
      {
        model: Usuario,
        attributes: {
          include: ["usu_nom", "usu_ape", "usu_email", "usu_tipo"],
          exclude: [...excluir, "usu_hash", "usu_salt"],
        },
      },
      {
        model: PedidoPlato,
        attributes: { exclude: excluir },
      },
    ],
  });
  res.status(200).json({
    ok: true,
    pedidos,
  });
};

export const getPedidoById = async (req: Request, res: Response) => {
  const pedido = await Pedido.findByPk(req.params.pedido_id, {
    attributes: { exclude: excluir },
    include: [
      {
        model: Mesa,
        attributes: {
          exclude: excluir,
        },
      },
      {
        model: Usuario,
        attributes: {
          include: ["usu_nom", "usu_ape", "usu_email", "usu_tipo"],
          exclude: [...excluir, "usu_hash", "usu_salt"],
        },
      },
      {
        model: PedidoPlato,
        attributes: { exclude: excluir },
        include: [
          {
            model: Plato,
            attributes: {
              exclude: excluir,
            },
          },
        ],
      },
    ],
  });
  res.status(200).json({
    ok: true,
    pedido,
  });
};

export const postPedido = async (req: Request, res: Response) => {
  /**
   * Cada pedidoplato{} debe tener
   
    * [
    *  {
    *   plato_id:1,
    *   pedidoplato_cant:5
    *  }
    *  {
    *   plato_id:1,
    *   pedidoplato_cant:5
    *  }
    * ]
   */
  const { pedidoplatos } = req.body;
  const t = await conexion.transaction();

  try {
    const objPedido = await Pedido.create(req.body, { transaction: t });
    for (const pedidoplato of pedidoplatos) {
      await PedidoPlato.create(
        { ...pedidoplato, pedido_id: objPedido.pedido_id },
        { transaction: t }
      );
    }
    await t.commit();
    emitirReporte();
    res.status(201).json({
      ok: true,
      content: "Pedido y lista de platos correctamente creado",
    });
  } catch (error) {
    await t.rollback();
    throw new Error(error);
  }
};
