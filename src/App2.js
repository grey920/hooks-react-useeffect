import React, { useState } from 'react';
import Movie from './Movie';
import useAxios from './useAxios';
import './App2.css';



function App() {

    const [page, setPage] = useState(1);

    //  const { loading, error, data, refetch }는 useAxios를 GET으로 보냈을때의 리턴값
    const { loading, error, data, refetch } = useAxios({
        page: page,
        method: "get",
        url:
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=like_count&page=${page}`,
    });

    console.log(` 
          Loading: ${loading}
          Error: ${error}
          Data: ${data}
      `);
    console.log(data);
    const movies = data ? data.data.data.movies : null;
    console.log(movies);
    //클릭할 때 setPage하고 refetch를 콜하는 함수 생성하기 
    const reload = () => {
        setPage(page + 1);
        refetch()
    }


    return (
        <section className="container">
            <button onClick={() => reload()}>refetch</button>
            {
                movies ? (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                ) : (
                        <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    )
            }
        </section >
    );
}


export default App; 