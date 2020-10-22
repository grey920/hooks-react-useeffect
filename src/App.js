import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      //    .then((res) => res.json())
      .then((res) => {
        setMovies(res.data.data.movies);
        console.log(res.data.data);
        console.log(res.data.data.movies);
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
    <Container>
      <GlobalStyle />
      {movies.map((post, index) => (
        <Post key={index}>
          <img src={post.small_cover_image} />
          <Title>{post.title}</Title>
          <Body>{post.summary}</Body>
        </Post>
      ))}

    </Container>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 200px 0;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 30px 20px;
  justify-content: center;
  background: #55efc4;
  box-sizing: border-box;
`;

const Post = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  box-shadow: 10px 5px 5px #7f8fa6;
`;

const Title = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: 600;
`;

const Body = styled.div`
  height: 80%;
  padding: 11px;
  border-radius: 20px;
`;


export default App;
