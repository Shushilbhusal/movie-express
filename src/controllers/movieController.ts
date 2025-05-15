// import { express } from "express";
import { Request, Response } from "express";
import { createMovie, deleteMovieById } from "../models/movies";
import { getAllMovies } from "../models/movies";
import { getMovieById } from "../models/movies";
import { updateMovieById } from "../models/movies";

export const  createMovieByController=(req:Request, res:Response)=>{
  // const movieId= parseInt(req.params.id);

  const {name, releaseDate, rating}= req.body;
  if(!name || !releaseDate || !rating){res.status(400).json({message:"name, releaseDate and rating are required"})};

  const movie = createMovie({name:name, releaseDate:releaseDate, rating:rating});
  res.status(200).json(movie);
  

}

export const  getMovieByIdController=(req:Request, res:Response)=>{
  const movieId= parseInt(req.params.id);
  const getOneMovie=getMovieById(movieId);
  res.status(200).json(getOneMovie);

}


export const getAllMoviesByController=(req:Request, res:Response)=>{
   const allMov=getAllMovies();
   res.json(allMov);
}


export const updateMovieByIdController=(req:Request, res:Response)=>{
  const movieId= parseInt(req.params.id);
  const {name, releaseDate, rating}= req.body;
  if(!name || !releaseDate || !rating){
     res.status(400).json({message:"name, releaseDate and rating are required"})};
     
  const updatedMovie= updateMovieById({
    id:movieId,
    name:name,
    releaseDate:releaseDate,
    rating:rating
  });
  res.status(200).json(updatedMovie);

}


export const deleteMovieByIdController=(req:Request, res:Response)=>{
  const movieId= parseInt(req.params.id);
  const deletedMovie= deleteMovieById(movieId);
  res.json(deletedMovie);

}