// import { express } from "express";
import { Request, Response } from "express";
// import { createMovie, deleteMovieById } from "../models/movies";
// import { getAllMovies } from "../models/movies";
// import { getMovieById } from "../models/movies";
// import { updateMovieById } from "../models/movies";
import { movieSqlModel } from "../sql-Models/movies.sql.model";

export const  createMovieByController= async (req:Request, res:Response)=>{
  // const movieId= parseInt(req.params.id);

  const {movie_name, movie_genre, rating}= req.body;
  if(!movie_name || !movie_genre || !rating){res.status(400).json({message:"name, genre and rating are required"})};

  const movie = movieSqlModel.createMovie({movie_name,movie_genre,rating});
  if(!!movie){
    res.json({message: "movie created successfully"})
  }
  res.status(200).json(movie);
}

export const  getMovieByIdController=async (req:Request, res:Response)=>{
  const movieId= parseInt(req.params.id);
  const getOneMovie= await movieSqlModel.getMovieById(movieId);
  res.status(200).json(getOneMovie);

}


export const getAllMoviesByController=async(req:Request, res:Response)=>{
   const allMovie=await movieSqlModel.getallMovies();
   res.json(allMovie);
}


export const updateMovieByIdController=async (req:Request, res:Response)=>{
  const movieId= parseInt(req.params.id);
  const {movie_name, movie_genre, rating}= req.body;
  if(!movie_name || !movie_genre || !rating){
     res.status(400).json({message:"name, genre and rating are required"})};
     
  const updatedMovie= await movieSqlModel.updateMovieById(movieId,{movie_name, movie_genre, rating});
  res.status(200).json(updatedMovie);

}


export const deleteMovieByIdController=async(req:Request, res:Response)=>{
  const movieId= parseInt(req.params.id);
  const deletedMovie= await movieSqlModel.deleteMovieById(movieId);
  res.json(deletedMovie);

}