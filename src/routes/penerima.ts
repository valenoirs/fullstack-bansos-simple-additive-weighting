import express from "express";
import {
  tambahPenerima,
  updatePenerima,
  deletePenerima,
  updateKriteria,
} from "../controllers/penerima";

export const router = express.Router();

router.post("/", tambahPenerima);

router.put("/", updatePenerima);

router.delete("/", deletePenerima);

router.patch("/", updateKriteria);
