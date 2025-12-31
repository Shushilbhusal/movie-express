import { deleteMovieById, updateMovieById } from "../models/movies";
import { pool } from "../sql-Models/mysql-client";
import { Request, Response } from "express";

export const movieSqlModel = {
  getallMovies: async () => {
    const [movies] = await pool.query(`select * from movies`);
    return movies;
  },


  getMovieById: async (id: number) => {
    const [movie] = await pool.query(
      `select * from movies where movie_id = ?`,
      [id]
    );
    return movie;
  },
  async createMovie(movie: {
    movie_name: string;
    movie_genre: string;
    rating: number;
  }) {
    const [result]: any = await pool.query(
      `insert into movies(movie_name, movie_genre, rating) values(?,?,?)`,
      [movie.movie_name, movie.movie_genre, movie.rating]
    );
    const createdId = result.insertId;
    // const createdMovie= await this.getMovieById(createdId);
    // res.json(createdMovie);
    return { id: createdId, ...result };
  },
  async updateMovieById(
    id: number,
    movie: Partial<{
      movie_name: string;
      movie_genre: string;
      rating: Number;
    }>
  ) {
    const fields: string[] = [];
    const values: any[] = [];
    if (movie.movie_name !== undefined) {
      fields.push("movie_name = ?");
      values.push(movie.movie_name);
    }
    if (movie.movie_genre !== undefined) {
      fields.push("movie_genre = ?");
      values.push(movie.movie_genre);
    }
    if (movie.rating !== undefined) {
      fields.push("rating = ?");
      values.push(movie.rating);
    }

    const updatedMovie = await pool.query(
      `update movies  set ${fields.join(", ")} where movie_id=?`,
      [...values, id]
    );

    const getMovie = await this.getMovieById(id);
    return getMovie;
  },

  async deleteMovieById(id: Number) {
    const [deleteMovie]: any = await pool.query(
      `delete from movies where movie_id=? `,
      [id]
    );
    return deleteMovie.affectedRows > 0;
  },
};
