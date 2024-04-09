import React,{useState} from 'react'
import "./movies.css"
const moviesData = [
  {
    title: "3 Idiots",
    actor: "Aamir Khan",
    genre: "Comedy/Drama",
    director: "Rajkumar Hirani",
  },
  {
    title: "Dangal",
    actor: "Aamir Khan",
    genre: "Biographical/Sports",
    director: "Nitesh Tiwari",
  },
  {
    title: "Bahubali: The Beginning",
    actor: "Prabhas",
    genre: "Action/Fantasy",
    director: "S.S. Rajamouli",
  },
  {
    title: "Lagaan",
    actor: "Aamir Khan",
    genre: "Drama/Sports",
    director: "Ashutosh Gowariker",
  },
  {
    title: "PK",
    actor: "Aamir Khan",
    genre: "Comedy/Drama",
    director: "Rajkumar Hirani",
  },
  {
    title: "Sholay",
    actor: "Amitabh Bachchan",
    genre: "Action/Adventure",
    director: "Ramesh Sippy",
  },
  {
    title: "Bajrangi Bhaijaan",
    actor: "Salman Khan",
    genre: "Drama/Action",
    director: "Kabir Khan",
  },
  {
    title: "Gully Boy",
    actor: "Ranveer Singh",
    genre: "Musical/Drama",
    director: "Zoya Akhtar",
  },
  {
    title: "Queen",
    actor: "Kangana Ranaut",
    genre: "Comedy/Drama",
    director: "Vikas Bahl",
  },
  {
    title: "Andhadhun",
    actor: "Ayushmann Khurrana",
    genre: "Thriller/Comedy",
    director: "Sriram Raghavan",
  },
];



const Movies = () => {
const[movie,setMovies]=useState("");



console.log(movie);


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div className="movielist">
        {
          // display movies
          moviesData.map((item, index) => (
            <h3
              key={index}
              onClick={() => {
                setMovies(item);
              }}
            >
              {item.title}
            </h3>
          ))
        }
      </div>
      {movie !== "" && (
        <div className="movieDisplay">
          <h1>The Movie :</h1>
          <div>
            <p>Movie :{movie.title}</p>
            <p>Actor :{movie.actor}</p>
            <p>Genre :{movie.genre}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies