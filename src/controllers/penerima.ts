import config from "../config/config";
import { Request, Response } from "express";

import { Penerima } from "../models/penerima";

/**
 * Tambah Penerima controller
 * @param req Node HTTP Request
 * @param res Node HTTP Response
 * @returns HTTP Response
 */
export const tambahPenerima = async (req: Request, res: Response) => {
  try {
    // Validate penerima input

    await new Penerima(req.body).save();

    // Success response
    console.log(`[server]: OK! penerima-added!`);
    req.flash("error", "Penerima berhasil ditambahkan!");
    return res.redirect("/");
  } catch (error) {
    // Error handler if something went wrong while signing in user
    console.error("tambah-penerima-error", error);
    req.flash("error", "Tambah penerima error, coba lagi!");
    return res.redirect("/");
  }
};

/**
 * Ubah Penerima controller
 * @param req Node HTTP Request
 * @param res Node HTTP Response
 * @returns HTTP Response
 */
export const updatePenerima = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    await Penerima.findByIdAndUpdate(id, {
      $set: {},
    });

    // Success response
    console.log(`[server]: OK! penerima-edited!`);
    req.flash("error", "Penerima berhasil diubah!");
    return res.redirect("/");
  } catch (error) {
    // Error handler if something went wrong while signing in user
    console.error("edit-penerima-error", error);
    req.flash("error", "Ubah penerima error, coba lagi!");
    return res.redirect("/");
  }
};

/**
 * Hapus Penerima controller
 * @param req Node HTTP Request
 * @param res Node HTTP Response
 * @returns HTTP Response
 */
export const deletePenerima = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    await Penerima.findByIdAndDelete(id);

    // Success response
    console.log(`[server]: OK! penerima-deleted!`);
    req.flash("error", "Penerima berhasil dihapus!");
    return res.redirect("/");
  } catch (error) {
    // Error handler if something went wrong while signing in user
    console.error("delete-penerima-error", error);
    req.flash("error", "Delete penerima error, coba lagi!");
    return res.redirect("/");
  }
};

export const updateKriteria = async (req: Request, res: Response) => {
  try {
    const { id, kriteria } = req.body;

    const newKriteria = kriteria.map(Number);

    await Penerima.findByIdAndUpdate(id, { $set: { kriteria: newKriteria } });

    console.log("[server]: OK! penerima-kriteria-updated");
    req.flash("error", "Kriteria berhasil diubah!");
    return res.redirect("/");
  } catch (error) {
    // Error handler if something went wrong while signing in user
    console.error("update-kriteria-error", error);
    req.flash("error", "Update kriteria error, coba lagi!");
    return res.redirect("/");
  }
};
