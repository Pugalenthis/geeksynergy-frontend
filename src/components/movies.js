import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Movies = () => {
  const history = useHistory();
  const [movies, setMovies] = useState("");

  useEffect(() => {
    fetch(`https://hoblist.com/api/movieList`, {
      method: "POST",
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => setMovies(res.result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container  mx-auto ">
        <div className="h-[50px] rounded-lg bg-cyan-500 w-full inline-flex items-center justify-end ">
          <div
            onClick={() => history.push("/company")}
            className="text-white mr-2 border border-white px-3 py-2 rounded-md"
          >
            Company Info
          </div>
          <div
            onClick={() => history.push("/users")}
            className="text-white mr-2 border border-white px-3 py-2 rounded-md"
          >
            Registered Users
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 mt-10">
          {movies === "" ? (
            <h1 className="absolute top-1/3 left-1/2">
              Loading Please wait....
            </h1>
          ) : (
            movies.map((movie) => (
              <MovieCardTemplate
                title={movie.title}
                poster={movie.poster}
                genre={movie.genre}
                director={movie.director}
                stars={movie.stars}
                language={movie.language}
                pageViews={movie.pageViews}
                voting={movie.voting}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const MovieCardTemplate = ({
  title,
  poster,
  genre,
  director,
  stars,
  language,
  pageViews,
  voting,
}) => {
  return (
    <div>
      <div className="flex flex-col shadow-xl p-2">
        <div class="movie-card  flex flex-row justify-around">
          <div class="basis-2/12">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col h-full justify-center items-center ">
                <svg
                  style={{ width: "30px", fill: "gray" }}
                  className="text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
                </svg>
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                1
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                <svg
                  style={{ width: "30px", fill: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
                </svg>
              </div>
              <div className="flex flex-col h-full justify-end align-middle w-full items-center">
                votes
              </div>
            </div>
          </div>
          <div class="basis-3/12">
            <img className="object-contain rounded-md" src={poster} alt="" />
          </div>
          <div class="basis-6/12 ml-2">
            <div className="flex flex-col justify-between h-full ">
              <div className="text-xl font-extrabold">{title}</div>
              <div>
                <span className="">Genre</span>:
                <span className="font-extralight">{genre}</span>
              </div>
              <div>
                <span>Director:</span>
                <span className="font-extralight">{director}</span>
              </div>
              <div>
                <span>Starring:</span>
                <span className="font-extralight">{stars}</span>
              </div>
              <div>Mins | {language} | 2 Apr</div>
              <div className="text-cyan-500">
                {pageViews} views | voted by {voting} people
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className=" px-4 py-2 border border-transparent text-sm font-medium rounded-md  text-white bg-cyan-500 hover:bg-cyan-600 text-center my-2"
        >
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default Movies;
