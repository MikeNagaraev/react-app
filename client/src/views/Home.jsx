import React from "react";
import SearchMovieForm from '../forms/SearchMovieForm';

const header = React.createElement("h1", {}, "Welcome to Home Page"); // create Element


export default class HomePage extends React.Component { // react Component
    render() {
        return (
            <div>
                {header}
                <SearchMovieForm />
            </div>
        )
    }
}
