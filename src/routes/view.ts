import express, { Request, Response } from "express";
import { Penerima } from "../models/penerima";

import mergeArrayObjectsById from "../helper/merge-array-object-by-id";
import valenoirs from "../helper/simple-additive-weighting";

export const router = express.Router();

const title: string = "Simple Additive Weighting";

router.get("/", async (req: Request, res: Response) => {
  const penerima = await Penerima.find();

  const score = valenoirs(penerima);

  const data = mergeArrayObjectsById(penerima, score);

  const sort = data.sort((a: any, b: any) => {
    return b.score - a.score;
  });

  res.render("index", {
    layout: "layouts/index",
    title,
    score,
    penerima: sort,
    error: req.flash("error"),
  });
});

router.get("/penerima", async (req: Request, res: Response) => {
  if (!req.session.user) {
    req.flash("error", "Login untuk melihat detail!");
    res.redirect("/");
  } else {
    const penerima = await Penerima.find();

    res.render("penerima", {
      layout: "layouts/index",
      title,
      penerima,
      error: req.flash("error"),
    });
  }
});

router.get("/kriteria", async (req: Request, res: Response) => {
  if (!req.session.user) {
    req.flash("error", "Login untuk melihat detail!");
    res.redirect("/");
  } else {
    const penerima = await Penerima.find();

    res.render("kriteria", {
      layout: "layouts/index",
      title,
      penerima,
      error: req.flash("error"),
    });
  }
});
