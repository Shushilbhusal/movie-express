// import { express } from "express";
import { Request, Response } from "express";
// import { createMovie, deleteMovieById } from "../models/movies";
// import { getAllMovies } from "../models/movies";
// import { getMovieById } from "../models/movies";
// import { updateMovieById } from "../models/movies";
import { movieSqlModel } from "../sql-Models/movies.sql.model";
import asyncHandler from "../middleware/asyncHandler";
import AppError from "../utils/appError";

export const createMovieByController = asyncHandler(
  async (req: Request, res: Response) => {
    const { movie_name, movie_genre, rating } = req.body;

    //  Validation error
    if (!movie_name || !movie_genre || !rating) {
      throw new AppError("name, genre and rating are required", 400);
    }

    //  Database call (can throw error)
    const movie = await movieSqlModel.createMovie({
      movie_name,
      movie_genre,
      rating,
    });

    //  Success response (only ONE response)
    res.status(201).json({
      success: true,
      message: "movie created successfully",
      data: movie,
    });
  }
);

export const getMovieByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.id);
    const getOneMovie = await movieSqlModel.getMovieById(movieId);
    if (!getOneMovie) {
      throw new AppError("Movie not found", 404);
    }
    res.status(200).json(getOneMovie);
  }
);

export const getAllMoviesByController = asyncHandler(
  async (req: Request, res: Response) => {
    const allMovie = await movieSqlModel.getallMovies();
    if (!allMovie) {
      throw new AppError("No movies found", 404);
    }
    res.json(allMovie);
  }
);

export const updateMovieByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.id);
    const { movie_name, movie_genre, rating } = req.body;
    if (!movie_name || !movie_genre || !rating) {
      throw new AppError("name, genre and rating are required", 400);
    }

    const updatedMovie = await movieSqlModel.updateMovieById(movieId, {
      movie_name,
      movie_genre,
      rating,
    });
    res.status(200).json(updatedMovie);
  }
);

export const deleteMovieByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.id);
    if (!movieId) {
      throw new AppError("Movie ID is required", 400);
    }
    const deletedMovie = await movieSqlModel.deleteMovieById(movieId);
    if (!deletedMovie) {
      throw new AppError("Movie not found", 404);
    }
    res.json(deletedMovie);
  }
);
