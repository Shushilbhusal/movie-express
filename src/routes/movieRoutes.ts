import express, { Request, Response, NextFunction } from "express";

import {
  createMovieByController,
  getMovieByIdController,
  getAllMoviesByController,
  updateMovieByIdController,
  deleteMovieByIdController,
} from "../controllers/movieController";

const router = express.Router();

router.post(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.query.role;
    if (role === "admin") {
      next();
    } else
      next({
        message: "You are not admin",
        error: 403,
      });
  },
  createMovieByController
);
router.get(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.query.role;
    if (role === "admin") {
      next();
    } else
      next({
        message: "You are not admin",
        error: 403,
      });
  },
  getMovieByIdController
);
router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.query.role;
    if (role === "admin") {
      next();
    } else
      next({
        message: "You are not admin",
        error: 403,
      });
  },
  getAllMoviesByController
);
router.put(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.query.role;
    if (role === "admin") {
      next();
    } else
      next({
        message: "You are not admin",
        error: 403,
      });
  },
  updateMovieByIdController
);
router.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.query.role;
    if (role === "admin") {
      next();
    } else
      next({
        message: "You are not admin",
        error: 403,
      });
  },
  deleteMovieByIdController
);

export default router;
