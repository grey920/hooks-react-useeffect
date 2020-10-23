import React, { useEffect, useState } from 'react';
import Movie from './Movie.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=like_count")
      .then((res) => {
        console.log(res.data.data.movies);
        setMovies(res.data.data.movies);
      });
  }, []);

  // const [posts, setPosts] = useState({ movies: [] });// 빈 배열로 초기화 //posts에는 배열이 저장된다. 
  // useEffect(() => {
  //   axios //axios를 통해 HTTP요청을 보내는 코드 -> 컴포넌트가 렌더링될 때마다 useEffect가 실행된다.
  //     .get("https://yts.mx/api/v2/list_movies.json")
  //     .then(res => {
  //       console.log(res.data);
  //       setPosts(res.data);
  //     }); //then()에서 HTTP요청을 통해 받아온 데이터를 처리한다

  // }, []); //({data})는 es6의 Destructing문법이다. 받아온 response객체 안에 있는 data배열을 바로 참조할 수 있음
  //useEffect()의 두번째 인자로 배열을 전달 -> 랜더링시 배열 내의 요소가 변화될떄에만 usdEffect를 실행한다. 
  //현재 빈 배열([])을 전달했기에 변화를 감지할만한 요소 자체가 없으므로 useEffect는 최초 렌더링 시에 한번만 실행되는 것이 보장된다. -> 안하면 무한렌더링

  return (
    <>
      <h1>BEST MOVIE LIST</h1>
      <p>The best movies get rating over 8</p>
      <div className="Container">
        {movies.map((post, index) => (
          <div className="post" key={index}>
            <div className="img-wrapper">
              <img src={post.medium_cover_image} />
            </div>
            <div className="title">{post.title}</div >
            <div className="summary">{post.summary}</div>
          </div >
        ))}

      </div >
    </>
  );
}



//export default App;
