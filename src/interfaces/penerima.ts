import { Model } from "mongoose";

export interface IPenerima {
  id?: string;
  nama: string;
  kriteria: number[];
}

// User model type
export type PenerimaModel = Model<IPenerima>;
