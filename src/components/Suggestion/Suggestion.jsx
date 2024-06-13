import styled from "styled-components";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = styled.div`
padding: 1rem;
width: 100%;
`

const Title = styled.h2`
color: gray;
text-align: left;
`

function Suggestion(props) {
    const [movies, setMovies] = useState([]);
    const {suggestion} = props;
    const { title, category } = suggestion;

    useEffect(()=>{

      /*  const options = {
            method: 'GET',
            url: 'https://movies-api14.p.rapidapi.com/movies',
            headers: {
              'x-rapidapi-key': '3ca2a87577mshb61d953db2d876cp106e47jsn6ad7b6c73990',
              'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
            }
          }; */

        axios.get('https://movies-api14.p.rapidapi.com/' + category, {headers: {
            'x-rapidapi-key': '3ca2a87577mshb61d953db2d876cp106e47jsn6ad7b6c73990',
            'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
          }, })
        .then((response)=>{
            console.log(response.data);
            const random = Math.floor(
                Math.random() * (response.data.movies.length - 6)
            );
            setMovies(response.data.movies.slice(random, random + 6));//response.data)
        })
        .catch((error)=>{
            console.warn(error);
        })
    }, [category])
    return ( <Card>
        <Title>{title}</Title>
        <Movies movies={movies} />
        </Card>
    );
}

export default Suggestion