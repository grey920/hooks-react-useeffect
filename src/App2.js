import React, { useState } from 'react';

import useAxios from './useAxios';



function App() {

    const { loading, error, data } = useAxios({ method: 'get', url: "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json?minimum_rating=8&sort_by=like_count" });

    console.log(` 

    Loading: ${loading} 

    Error: ${error} 

    Data: ${data} 

  `);
    console.log(data);




    return (

        <div className="App">

            <h1>Hello World</h1>

        </div>

    );

}



export default App; 