import React from "react";
import {Query} from "react-apollo";
import {HOME_PAGE} from "./queries";

const Home = () => (
    <Query query={HOME_PAGE}>
    {({loading, data, error}) =>{
        if(loading) return <span>loading</span>;
        if(error) {
            console.log("here");
            console.log(error);
            return <span>someting happend!!!!</span>;
        }
        if(data){
            console.log(data);
            return data.apimovies.map(movie => (
                <h2 key={movie.id}>[{movie.title} / {movie.rating}]</h2>
            ));
        }
    }}</Query>
);

export default Home;