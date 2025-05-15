// import { parse } from "path";

interface MovieDataType {
  id: number;
  name: string;
  releaseDate: Date;
  rating: number;
}

const allMovies: MovieDataType[] = [];
export default allMovies;

export function createMovie(input: Omit<MovieDataType, "id">){
   const newMovie={
    id:allMovies.length+1,
    name:input.name,
    releaseDate:input.releaseDate,
    rating:input.rating,
   }

   allMovies.push(newMovie);
   return newMovie;
  };

export function getMovieById(id: number) {
  const movie = allMovies.find((movie) => movie.id === id);
  return movie;
}


export function getAllMovies(){
  return allMovies;
}

export function updateMovieById(input:MovieDataType){
  const movieIndex= allMovies.findIndex((p)=> p.id===input.id)
  
  allMovies[movieIndex]={
    ...allMovies[movieIndex],
    name:input.name,
    releaseDate:input.releaseDate,
    rating:input.rating,
    
  }

  return allMovies[movieIndex]
}

export function deleteMovieById(id:number){
  const movieIndex = allMovies.findIndex((p)=>p.id===id);
  if(movieIndex===-1){return};  
  const deletedMovie=allMovies.splice(movieIndex,1);
  return deletedMovie;
  
}


