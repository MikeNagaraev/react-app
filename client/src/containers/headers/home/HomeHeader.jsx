import React from "react";
import SearchMovieForm from '../../forms/movie/SearchMovieForm';
import Logo from "../../../components/logo/Logo";

export default class HomeHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <Logo title="netflixroulette" className="logo" />
                <SearchMovieForm />
            </div>
        )
    }
}