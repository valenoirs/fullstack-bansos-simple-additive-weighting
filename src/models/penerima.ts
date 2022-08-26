import { Schema, model } from "mongoose";
import { IPenerima, PenerimaModel } from "../interfaces/penerima";

// Penerima Schema
const PenerimaSchema: Schema = new Schema<IPenerima, PenerimaModel>(
  {
    nama: { type: String, required: true },
    kriteria: { type: [Number], default: [5, 5, 5, 1, 5] },
  },
  {
    timestamps: true,
  }
);

// Export Penerima model
export const Penerima = model<IPenerima, PenerimaModel>(
  "Penerima",
  PenerimaSchema
);
